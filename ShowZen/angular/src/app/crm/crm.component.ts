import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventService } from '../proxy/services/events';
import { EventStatus } from '../proxy/entities/events';
import { EventDto } from '../proxy/services/dtos/events';
import { ToasterService } from '@abp/ng.theme.shared';
import { finalize } from 'rxjs/operators';
import { EventQuickModalComponent } from '../schedule-overview/components/event-quick-modal/event-quick-modal.component';

interface KanbanColumn {
    status: EventStatus;
    title: string;
    items: EventDto[];
    colorClass: string;
}

@Component({
    selector: 'app-crm',
    templateUrl: './crm.component.html',
    styleUrls: ['./crm.component.scss'],
    standalone: false
})
export class CrmComponent implements OnInit {
    @ViewChild('eventQuickModal') eventQuickModal!: EventQuickModalComponent;
    loading = false;

    // Mapeamento de colunas
    columns: KanbanColumn[] = [
        { status: EventStatus.Lead, title: 'Lead', items: [], colorClass: 'border-top-primary' },
        { status: EventStatus.ProposalSent, title: 'Proposta Enviada', items: [], colorClass: 'border-top-info' },
        { status: EventStatus.Negotiation, title: 'Negociação', items: [], colorClass: 'border-top-warning' },
        { status: EventStatus.Confirmed, title: 'Fechado (Won)', items: [], colorClass: 'border-top-success' },
        { status: EventStatus.Lost, title: 'Perdido (Lost)', items: [], colorClass: 'border-top-danger' }
    ];

    constructor(
        private eventService: EventService,
        private toaster: ToasterService
    ) { }

    ngOnInit(): void {
        this.loadEvents();
    }

    loadEvents(): void {
        this.loading = true;
        this.eventService.getList({ maxResultCount: 1000 }).pipe(
            finalize(() => this.loading = false)
        ).subscribe(result => {
            this.distributeEvents(result.items);
        });
    }

    distributeEvents(events: EventDto[]): void {
        // Limpar colunas
        this.columns.forEach(c => c.items = []);

        // Distribuir
        events.forEach(evt => {
            const column = this.columns.find(c => c.status === evt.status);
            if (column) {
                column.items.push(evt);
            }
        });

        // Ordenar por data (opcional)
        this.columns.forEach(c => {
            c.items.sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime());
        });
    }

    // Método melhorado para o drop
    handleDrop(event: CdkDragDrop<EventDto[]>, targetStatus: EventStatus): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const item = event.previousContainer.data[event.previousIndex];

            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );

            // Atualizar objeto local
            item.status = targetStatus;

            this.updateStatus(item.id, targetStatus);
        }
    }

    updateStatus(id: string, status: EventStatus): void {
        this.eventService.updateStatus(id, status).subscribe({
            next: () => {
                this.toaster.success('Status atualizado');
            },
            error: (err) => {
                this.toaster.error('Erro ao atualizar status');
                // Revert UI if needed (complex)
                this.loadEvents(); // Reload to sync
            }
        });
    }

    getFeeTotal(items: EventDto[]): number {
        return items.reduce((sum, item) => sum + (item.fee || 0), 0);
    }

    editEvent(id: string): void {
        this.eventQuickModal.edit(id);
    }
}
