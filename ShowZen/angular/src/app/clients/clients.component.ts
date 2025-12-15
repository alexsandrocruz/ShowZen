import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
    ListService,
    PagedResultDto,
    LocalizationPipe,
    PermissionDirective
} from '@abp/ng.core';
import {
    ConfirmationService,
    Confirmation,
    NgxDatatableDefaultDirective,
    NgxDatatableListDirective,
    ModalCloseDirective,
    ModalComponent
} from '@abp/ng.theme.shared';
import { PageModule } from '@abp/ng.components/page';
import { ClientService } from '../proxy/services/clients/client.service';
import { ClientDto, GetClientListDto } from '../proxy/services/dtos/clients/models';
import { ClientType } from '../proxy/entities/clients/client-type.enum';
import { LeadStatus } from '../proxy/entities/clients/lead-status.enum';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        NgxDatatableModule,
        PageModule,
        LocalizationPipe,
        PermissionDirective,
        NgxDatatableDefaultDirective,
        NgxDatatableListDirective,
        NgxDatatableListDirective,
        ModalComponent
    ],
    providers: [ListService],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
    clients: PagedResultDto<ClientDto> = { items: [], totalCount: 0 };

    isModalOpen = false;
    selectedClient = {} as ClientDto;

    form!: FormGroup;
    filterForm!: FormGroup;

    clientTypes = [
        { value: ClientType.Municipality, label: 'Municipality' },
        { value: ClientType.StateGovernment, label: 'StateGovernment' },
        { value: ClientType.FederalGovernment, label: 'FederalGovernment' },
        { value: ClientType.Sebrae, label: 'Sebrae' },
        { value: ClientType.Church, label: 'Church' },
        { value: ClientType.PrivateCompany, label: 'PrivateCompany' },
        { value: ClientType.LocalProducer, label: 'LocalProducer' },
        { value: ClientType.EventAgency, label: 'EventAgency' },
        { value: ClientType.TvRadioPodcast, label: 'TvRadioPodcast' },
        { value: ClientType.Other, label: 'Other' }
    ];

    leadStatuses = [
        { value: LeadStatus.New, label: 'New' },
        { value: LeadStatus.Contacted, label: 'Contacted' },
        { value: LeadStatus.Qualified, label: 'Qualified' },
        { value: LeadStatus.ProposalSent, label: 'ProposalSent' },
        { value: LeadStatus.Negotiation, label: 'Negotiation' },
        { value: LeadStatus.Won, label: 'Won' },
        { value: LeadStatus.Lost, label: 'Lost' }
    ];

    constructor(
        public readonly list: ListService<GetClientListDto>,
        private clientService: ClientService,
        private fb: FormBuilder,
        private confirmation: ConfirmationService
    ) { }

    ngOnInit() {
        this.buildForm();
        this.buildFilterForm();

        const clientStreamCreator = (query: GetClientListDto) => this.clientService.getList(query);

        this.list.hookToQuery(clientStreamCreator).subscribe((response) => {
            this.clients = response;
        });
    }

    buildForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            type: [null, Validators.required],
            document: ['', Validators.maxLength(20)],
            email: ['', [Validators.email, Validators.maxLength(200)]],
            phone: ['', Validators.maxLength(20)],
            address: ['', Validators.maxLength(500)],
            city: ['', Validators.maxLength(100)],
            state: ['', Validators.maxLength(2)],
            notes: ['', Validators.maxLength(1000)]
        });
    }

    buildFilterForm() {
        this.filterForm = this.fb.group({
            filter: [''],
            type: [null],
            leadStatus: [null],
            isActive: [null]
        });

        this.filterForm.valueChanges.subscribe(() => {
            this.list.filter = this.filterForm.value.filter;
            this.list.get();
        });
    }

    createClient() {
        this.selectedClient = {} as ClientDto;
        this.form.reset();
        this.isModalOpen = true;
    }

    editClient(id: string) {
        this.clientService.get(id).subscribe((client) => {
            this.selectedClient = client;
            this.form.patchValue(client);
            this.isModalOpen = true;
        });
    }

    save() {
        if (this.form.invalid) {
            return;
        }

        const request = this.selectedClient.id
            ? this.clientService.update(this.selectedClient.id, this.form.value)
            : this.clientService.create(this.form.value);

        request.subscribe(() => {
            this.isModalOpen = false;
            this.form.reset();
            this.list.get();
        });
    }

    delete(id: string) {
        this.confirmation.warn('::AreYouSure', '::AreYouSureToDelete').subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.clientService.delete(id).subscribe(() => this.list.get());
            }
        });
    }

    updateLeadStatus(id: string, newStatus: LeadStatus) {
        this.clientService.updateLeadStatus(id, newStatus).subscribe(() => {
            this.list.get();
        });
    }

    getClientTypeName(type: ClientType): string {
        return ClientType[type];
    }

    getLeadStatusName(status: LeadStatus): string {
        return LeadStatus[status];
    }

    getLeadStatusClass(status: LeadStatus): string {
        const statusMap: Record<LeadStatus, string> = {
            [LeadStatus.New]: 'bg-info',
            [LeadStatus.Contacted]: 'bg-primary',
            [LeadStatus.Qualified]: 'bg-info',
            [LeadStatus.ProposalSent]: 'bg-primary',
            [LeadStatus.Negotiation]: 'bg-warning',
            [LeadStatus.Won]: 'bg-success',
            [LeadStatus.Lost]: 'bg-danger'
        };
        return statusMap[status] || 'bg-secondary';
    }
}
