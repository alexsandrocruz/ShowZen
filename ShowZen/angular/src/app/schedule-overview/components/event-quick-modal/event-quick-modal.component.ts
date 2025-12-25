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
import { EventType } from '../../../proxy/entities/events/event-type.enum';
import { EventStatus } from '../../../proxy/entities/events/event-status.enum';
import { ArtistDto } from '../../../proxy/services/dtos/artists/models';
import { ClientDto, CreateUpdateClientDto } from '../../../proxy/services/dtos/clients/models';
import { ClientType } from '../../../proxy/entities/clients/client-type.enum';
import { LocationDto, CreateUpdateLocationDto } from '../../../proxy/services/dtos/events/models';

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
    ModalComponent
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
      value: key
    }));

  eventStatuses = Object.keys(EventStatus)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      key: EventStatus[key as keyof typeof EventStatus],
      value: key
    }));

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
      locationId: [null], // Optional
      fee: [null, [Validators.min(0)]], // Optional, but must be >= 0
      status: [EventStatus.Lead], // Default to Lead
      startDate: [null, [Validators.required]],
      startTime: [{ hour: 20, minute: 0 }, [Validators.required]],
      duration: [120, [Validators.required, Validators.min(30)]], // Duration in minutes
      description: ['', [Validators.maxLength(2000)]]
    });
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
    this.form.reset({
      type: EventType.Show,
      startTime: { hour: 20, minute: 0 },
      duration: 120
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
      const duration = Math.round((endDateTime.getTime() - startDateTime.getTime()) / 60000);

      this.form.patchValue({
        title: event.title,
        type: event.type,
        artistId: event.artistId,
        clientId: event.clientId,
        locationId: event.locationId,
        fee: event.fee,
        status: event.status || EventStatus.Lead,
        startDate: startDateTime, // Use Date directly (NgbDateNativeAdapter handles it)
        startTime: { hour: startDateTime.getHours(), minute: startDateTime.getMinutes() },
        duration: duration,
        description: event.description
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

    // Calculate End Date Time based on duration
    const endDateTime = new Date(startDateTime.getTime() + formValue.duration * 60000);

    const input = {
      title: formValue.title,
      type: Number(formValue.type),
      artistId: formValue.artistId,
      clientId: formValue.clientId,
      locationId: formValue.locationId,
      fee: formValue.fee,
      status: formValue.status != null ? Number(formValue.status) : undefined,
      startDateTime: toLocalISOString(startDateTime),
      endDateTime: toLocalISOString(endDateTime),
      description: formValue.description
    };

    // Check for conflict before saving
    this.eventService.checkConflict({
      artistId: formValue.artistId,
      startDateTime: toLocalISOString(startDateTime),
      endDateTime: toLocalISOString(endDateTime),
      excludeEventId: this.editingEventId ?? undefined
    }).subscribe(hasConflict => {
      if (hasConflict) {
        this.confirmation.warn(
          'Já existe um compromisso agendado para este artista no mesmo horário. Deseja prosseguir mesmo assim?',
          'Conflito de Agenda Detectado',
          { yesText: 'Sim, Salvar Mesmo Assim', cancelText: 'Voltar e Alterar' }
        ).subscribe(status => {
          if (status === Confirmation.Status.confirm) {
            this.doSave(input);
          }
        });
      } else {
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
