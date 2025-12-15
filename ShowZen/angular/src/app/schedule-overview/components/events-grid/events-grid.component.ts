import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSummaryDto, AvailabilityStatus } from '../../../proxy/services/dtos/events/models';
import { EventStatus, EventType } from '../../../proxy/entities/events';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EventsGridComponent {
  @Input() events: EventSummaryDto[] = [];
  @Output() eventClick = new EventEmitter<EventSummaryDto>();

  EventStatus = EventStatus;
  EventType = EventType;

  onEventClick(event: EventSummaryDto): void {
    this.eventClick.emit(event);
  }

  getStatusLabel(status: EventStatus): string {
    switch (status) {
      case EventStatus.Confirmed: return 'Confirmado';
      case EventStatus.ProposalSent: return 'Proposta Enviada';
      case EventStatus.Lead: return 'Lead';
      case EventStatus.InProgress: return 'Em Andamento';
      case EventStatus.Completed: return 'Concluído';
      case EventStatus.Cancelled: return 'Cancelado';
      case EventStatus.Lost: return 'Perdido';
      default: return 'Desconhecido';
    }
  }

  getStatusClass(status: EventStatus): string {
    switch (status) {
      case EventStatus.Confirmed: return 'bg-success';
      case EventStatus.ProposalSent: return 'bg-warning';
      case EventStatus.Lead: return 'bg-secondary';
      case EventStatus.InProgress: return 'bg-primary';
      case EventStatus.Completed: return 'bg-info';
      case EventStatus.Cancelled: return 'bg-danger';
      case EventStatus.Lost: return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getTypeLabel(type: EventType): string {
    const icons: Record<number, string> = {
      1: '🎵 Show',
      2: '🎤 Palestra',
      3: '👨‍🏫 Workshop',
      4: '📺 TV',
      5: '📻 Rádio',
      6: '🎙️ Podcast',
      7: '🏛️ Institucional',
      8: '🏢 Corporativo',
      9: '📚 Treinamento',
      99: '❓ Outro'
    };
    return icons[type] || 'Evento';
  }
}
