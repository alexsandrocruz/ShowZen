import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { LocalizationPipe } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ModalComponent } from '@abp/ng.theme.shared';
import { toLocalISOString } from '../../../shared/utils/date-helpers';
import { EventService } from '../../../proxy/services/events/event.service';
import { ArtistService } from '../../../proxy/services/artists/artist.service';
import { ClientService } from '../../../proxy/services/clients/client.service';
import { LocationService } from '../../../proxy/services/events/location.service';
import { LocationDto, CreateUpdateLocationDto, CreateUpdateEventCommissionDto, EventDto } from '../../../proxy/services/dtos/events/models';
import { ArtistDto } from '../../../proxy/services/dtos/artists/models';
import { ClientDto, CreateUpdateClientDto } from '../../../proxy/services/dtos/clients/models';
import { ClientType } from '../../../proxy/entities/clients/client-type.enum';
import { EventType } from '../../../proxy/entities/events/event-type.enum';
import { EventStatus } from '../../../proxy/entities/events/event-status.enum';
import { ContractType } from '../../../proxy/entities/events/contract-type.enum';
import { NegotiationType } from '../../../proxy/entities/events/negotiation-type.enum';
import { FormArray } from '@angular/forms';
import { CurrencyBrlInputDirective } from '../../../shared/directives/currency-brl-input.directive';
import { PercentageInputDirective } from '../../../shared/directives/percentage-input.directive';

@Component({
  selector: 'app-event-quick-modal',
  templateUrl: './event-quick-modal.component.html',
  styleUrls: ['./event-quick-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgSelectModule,
    LocalizationPipe,
    ModalComponent,
    CurrencyBrlInputDirective,
    PercentageInputDirective
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class EventQuickModalComponent implements OnInit {
  @ViewChild('abpModal') abpModal!: ModalComponent;
  @Output() onSave = new EventEmitter<void>();

  isModalOpen = false;
  isEditMode = false;
  editingEventId: string | null = null;
  form!: FormGroup;

  artists: ArtistDto[] = [];
  clients: ClientDto[] = [];
  locations: LocationDto[] = [];

  eventTypes = Object.keys(EventType)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      key: EventType[key as keyof typeof EventType],
      value: `::EventType:${key}`
    }));

  eventStatuses = Object.keys(EventStatus)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      key: EventStatus[key as keyof typeof EventStatus],
      value: `::EventStatus:${key}`
    }));

  contractTypes = Object.keys(ContractType)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      key: ContractType[key as keyof typeof ContractType],
      value: `::ContractType:${key}`
    }));

  negotiationTypes = Object.keys(NegotiationType)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      key: NegotiationType[key as keyof typeof NegotiationType],
      value: `::NegotiationType:${key}`
    }));

  get commissions() {
    return this.form.get('commissions') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private artistService: ArtistService,
    private clientService: ClientService,
    private locationService: LocationService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadDependencies();
  }

  buildForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      type: [null, [Validators.required]],
      artistId: [null, [Validators.required]],
      clientId: [null, [Validators.required]],
      locationId: [null],
      fee: [null, [Validators.min(0)]],
      status: [EventStatus.Lead],
      startDate: [null, [Validators.required]],
      startTime: { hour: 20, minute: 0 },
      durationInMinutes: [120, [Validators.required, Validators.min(30)]],
      description: ['', [Validators.maxLength(2000)]],

      // New fields
      localPartnerId: [null],
      contractType: [ContractType.Private],
      duration: ['02:00'],
      hasProduction: [false],
      productionValue: [null],
      productionPercentage: [null],
      negotiationType: [NegotiationType.Fee],
      guaranteeValue: [null],
      ticketPercentage: [null],
      discountValue: [null],
      taxPercentage: [0],
      taxValue: [0],
      commissions: this.fb.array([])
    });

    // Tax calculation logic
    this.form.get('taxPercentage')?.valueChanges.subscribe(val => {
      this.calculateTaxFromPercentage(val);
    });

    this.form.get('taxValue')?.valueChanges.subscribe(val => {
      this.calculateTaxFromValue(val);
    });

    // Production calculation logic
    this.form.get('productionValue')?.valueChanges.subscribe(val => {
      this.calculateProductionFromValue(val);
    });

    this.form.get('productionPercentage')?.valueChanges.subscribe(val => {
      this.calculateProductionFromPercentage(val);
    });

    // Update tax/production when fee changes
    this.form.get('fee')?.valueChanges.subscribe(() => {
      this.calculateTaxFromPercentage(this.form.get('taxPercentage')?.value);
      this.calculateProductionFromPercentage(this.form.get('productionPercentage')?.value);

      this.commissions.controls.forEach(control => {
        this.calculateCommissionValue(control as FormGroup);
      });
    });
  }

  addCommission(): void {
    const commissionForm = this.fb.group({
      description: ['', Validators.required],
      value: [null],
      percentage: [null]
    });
    this.setupCommissionListeners(commissionForm);
    this.commissions.push(commissionForm);
  }

  private setupCommissionListeners(group: FormGroup): void {
    group.get('percentage')?.valueChanges.subscribe(val => {
      this.calculateCommissionValue(group);
    });

    group.get('value')?.valueChanges.subscribe(val => {
      this.calculateCommissionPercentage(group);
    });
  }

  private calculateCommissionValue(group: FormGroup): void {
    const fee = this.form.get('fee')?.value || 0;
    const percentage = group.get('percentage')?.value || 0;
    if (fee > 0) {
      const value = (percentage / 100) * fee;
      group.get('value')?.setValue(Number(value.toFixed(2)), { emitEvent: false });
    }
  }

  private calculateCommissionPercentage(group: FormGroup): void {
    const fee = this.form.get('fee')?.value || 0;
    const value = group.get('value')?.value || 0;
    if (fee > 0) {
      const percentage = (value / fee) * 100;
      group.get('percentage')?.setValue(Number(percentage.toFixed(2)), { emitEvent: false });
    }
  }

  removeCommission(index: number): void {
    this.commissions.removeAt(index);
  }

  private calculateTaxFromPercentage(percentage: number): void {
    const fee = this.form.get('fee')?.value || 0;
    if (fee > 0) {
      const value = (percentage / 100) * fee;
      this.form.get('taxValue')?.setValue(Number(value.toFixed(2)), { emitEvent: false });
    }
  }

  private calculateTaxFromValue(value: number): void {
    const fee = this.form.get('fee')?.value || 0;
    if (fee > 0) {
      const percentage = (value / fee) * 100;
      this.form.get('taxPercentage')?.setValue(Number(percentage.toFixed(2)), { emitEvent: false });
    }
  }

  private calculateProductionFromValue(value: number): void {
    const fee = this.form.get('fee')?.value || 0;
    if (fee > 0) {
      const percentage = (value / fee) * 100;
      this.form.get('productionPercentage')?.setValue(Number(percentage.toFixed(2)), { emitEvent: false });
    }
  }

  private calculateProductionFromPercentage(percentage: number): void {
    const fee = this.form.get('fee')?.value || 0;
    if (fee > 0) {
      const value = (percentage / 100) * fee;
      this.form.get('productionValue')?.setValue(Number(value.toFixed(2)), { emitEvent: false });
    }
  }

  loadDependencies(): void {
    this.artistService.getList({ maxResultCount: 100 }).subscribe(res => {
      this.artists = res.items || [];
    });

    this.clientService.getList({ maxResultCount: 100 }).subscribe(res => {
      this.clients = res.items || [];
    });

    this.locationService.getList({ maxResultCount: 100 }).subscribe(res => {
      this.locations = res.items || [];
    });
  }

  open(): void {
    this.isEditMode = false;
    this.editingEventId = null;
    this.commissions.clear();
    this.form.reset({
      type: EventType.Show,
      status: EventStatus.Lead,
      startTime: { hour: 20, minute: 0 },
      durationInMinutes: 120,
      contractType: ContractType.Private,
      negotiationType: NegotiationType.Fee,
      hasProduction: false,
      taxPercentage: 0,
      taxValue: 0
    });
    this.isModalOpen = true;
  }

  edit(id: string): void {
    this.isEditMode = true;
    this.editingEventId = id;
    this.isModalOpen = true;

    this.eventService.get(id).subscribe(event => {
      const startDateTime = new Date(event.startDateTime!);
      const endDateTime = event.endDateTime ? new Date(event.endDateTime) : new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000);

      // Calculate duration in minutes
      const durationInMinutes = Math.round((endDateTime.getTime() - startDateTime.getTime()) / 60000);

      this.commissions.clear();
      if (event.commissions) {
        event.commissions.forEach(c => {
          const group = this.fb.group({
            description: [c.description, Validators.required],
            value: [c.value],
            percentage: [c.percentage]
          });
          this.setupCommissionListeners(group);
          this.commissions.push(group);
        });
      }

      this.form.patchValue({
        title: event.title,
        type: event.type,
        artistId: event.artistId,
        clientId: event.clientId,
        locationId: event.locationId,
        fee: event.fee,
        status: event.status || EventStatus.Lead,
        startDate: startDateTime,
        startTime: { hour: startDateTime.getHours(), minute: startDateTime.getMinutes() },
        durationInMinutes: durationInMinutes,
        description: event.description,
        localPartnerId: event.localPartnerId,
        contractType: event.contractType,
        duration: event.duration,
        hasProduction: event.hasProduction,
        productionValue: event.productionValue,
        productionPercentage: event.productionPercentage,
        negotiationType: event.negotiationType,
        guaranteeValue: event.guaranteeValue,
        ticketPercentage: event.ticketPercentage,
        discountValue: event.discountValue,
        taxPercentage: event.taxPercentage,
        taxValue: event.taxValue
      });
    });
  }

  close(): void {
    this.isModalOpen = false;
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    // Get the date as local (avoiding timezone conversion)
    const dateValue = formValue.startDate;
    let year: number, month: number, day: number;

    if (dateValue instanceof Date) {
      // NgbDateNativeAdapter returns Date
      year = dateValue.getFullYear();
      month = dateValue.getMonth();
      day = dateValue.getDate();
    } else {
      // NgbDateStruct format
      year = dateValue.year;
      month = dateValue.month - 1; // JS months are 0-indexed
      day = dateValue.day;
    }

    // Create datetime in LOCAL timezone (not UTC)
    const startDateTime = new Date(year, month, day, formValue.startTime.hour, formValue.startTime.minute, 0, 0);

    // Calculate End Date Time based on duration in minutes
    const endDateTime = new Date(startDateTime.getTime() + formValue.durationInMinutes * 60000);

    const mins = formValue.durationInMinutes || 0;
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    const durationStr = `${hours.toString().padStart(2, '0')}:${remMins.toString().padStart(2, '0')}`;

    const input = {
      ...formValue,
      type: Number(formValue.type),
      status: formValue.status != null ? Number(formValue.status) : undefined,
      contractType: Number(formValue.contractType),
      negotiationType: Number(formValue.negotiationType),
      startDateTime: toLocalISOString(startDateTime),
      endDateTime: toLocalISOString(endDateTime),
      startTime: `${formValue.startTime.hour.toString().padStart(2, '0')}:${formValue.startTime.minute.toString().padStart(2, '0')}`,
      duration: durationStr
    };

    // Check for conflict before saving
    this.eventService.checkConflict({
      artistId: formValue.artistId,
      startDateTime: toLocalISOString(startDateTime),
      endDateTime: toLocalISOString(endDateTime),
      excludeEventId: this.editingEventId ?? undefined
    }).subscribe({
      next: (hasConflict) => {
        console.log('Conflict check result:', hasConflict);
        if (hasConflict) {
          this.showConflictConfirmation(input);
        } else {
          this.doSave(input);
        }
      },
      error: (err) => {
        console.error('Error checking conflict:', err);
        // If conflict check fails, save anyway (don't block the user)
        this.doSave(input);
      }
    });
  }

  private showConflictConfirmation(input: any): void {
    this.confirmation.warn(
      'Já existe um compromisso agendado para este artista no mesmo horário. Deseja prosseguir mesmo assim?',
      'Conflito de Agenda Detectado',
      {
        yesText: 'Sim, Salvar Mesmo Assim',
        cancelText: 'Voltar e Alterar'
      }
    ).subscribe(status => {
      console.log('Confirmation status:', status);
      if (status === Confirmation.Status.confirm) {
        this.doSave(input);
      }
    });
  }

  private doSave(input: any): void {
    if (this.isEditMode && this.editingEventId) {
      this.eventService.update(this.editingEventId, input).subscribe(() => {
        this.onSave.emit();
        this.close();
      });
    } else {
      this.eventService.create(input).subscribe(() => {
        this.onSave.emit();
        this.close();
      });
    }
  }

  onAddLocation = (name: string): LocationDto | Promise<LocationDto> => {
    const newLocation: CreateUpdateLocationDto = {
      name: name,
      address: 'A definir',
      city: 'A definir',
      state: 'SP',
      zipCode: null,
      capacity: null,
      notes: 'Criado via Quick Add'
    };

    return new Promise((resolve) => {
      this.locationService.create(newLocation).subscribe(created => {
        this.locations.push(created);
        resolve(created);
      });
    });
  };

  customSearchFn = (term: string, item: LocationDto): boolean => {
    if (!term) return true;
    term = term.toLowerCase();
    return item.name.toLowerCase().includes(term) ||
      item.city.toLowerCase().includes(term) ||
      item.state.toLowerCase().includes(term);
  };

  // Client Quick Add
  onAddClient = (name: string): ClientDto | Promise<ClientDto> => {
    const newClient: CreateUpdateClientDto = {
      name: name,
      type: ClientType.PrivateCompany,
      email: undefined,
      phone: undefined,
      address: undefined,
      city: undefined,
      state: undefined,
      notes: 'Criado via Quick Add'
    };

    return new Promise((resolve) => {
      this.clientService.create(newClient).subscribe(created => {
        this.clients.push(created);
        resolve(created);
      });
    });
  };

  customSearchFnClient = (term: string, item: ClientDto): boolean => {
    if (!term) return true;
    term = term.toLowerCase();
    return (item.name?.toLowerCase().includes(term) ?? false) ||
      (item.email?.toLowerCase().includes(term) ?? false) ||
      (item.city?.toLowerCase().includes(term) ?? false);
  };
}
