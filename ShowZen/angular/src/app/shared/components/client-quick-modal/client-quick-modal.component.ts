import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '@abp/ng.theme.shared';
import { ClientService } from '../../../proxy/services/clients/client.service';
import { ClientDto } from '../../../proxy/services/dtos/clients/models';
import { ClientType, clientTypeOptions } from '../../../proxy/entities/clients/client-type.enum';

@Component({
    selector: 'app-client-quick-modal',
    templateUrl: './client-quick-modal.component.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ModalComponent]
})
export class ClientQuickModalComponent {
    @Output() onSave = new EventEmitter<ClientDto>();

    form!: FormGroup;
    isModalOpen = false;
    clientTypes = clientTypeOptions;

    constructor(
        private fb: FormBuilder,
        private clientService: ClientService
    ) {
        this.buildForm();
    }

    private buildForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            type: [ClientType.PrivateCompany, [Validators.required]],
            email: ['', [Validators.email]],
            phone: [''],
        });
    }

    open(initialName: string = ''): void {
        this.form.reset({
            name: initialName,
            type: ClientType.PrivateCompany,
            email: '',
            phone: ''
        });
        this.isModalOpen = true;
    }

    close(): void {
        this.isModalOpen = false;
    }

    save(): void {
        if (this.form.invalid) return;

        this.clientService.create(this.form.value).subscribe({
            next: (client) => {
                this.onSave.emit(client);
                this.close();
            },
            error: (err) => {
                console.error('Erro ao criar cliente:', err);
            }
        });
    }
}
