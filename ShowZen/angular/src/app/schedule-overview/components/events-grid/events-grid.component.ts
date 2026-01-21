import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSummaryDto, AvailabilityStatus } from '../../../proxy/services/dtos/events/models';
import { EventStatus, EventType } from '../../../proxy/entities/events';
import { ProposalService } from '../../../services/proposal.service';
import { ToasterService } from '@abp/ng.theme.shared';

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

  private proposalService = inject(ProposalService);
  private toaster = inject(ToasterService);

  EventStatus = EventStatus;
  EventType = EventType;
  generatingProposal = false;

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

  getTypeIcon(type: EventType): string {
    const icons: Record<number, string> = {
      1: '🎵',
      2: '🎤',
      3: '👨‍🏫',
      4: '📺',
      5: '📻',
      6: '🎙️',
      7: '🏛️',
      8: '🏢',
      9: '📚',
      99: '❓'
    };
    return icons[type] || '📅';
  }

  onGenerateProposal(event: EventSummaryDto): void {
    if (this.generatingProposal) {
      return;
    }

    this.generatingProposal = true;

    this.proposalService.generateProposal({ eventId: event.id }).subscribe({
      next: (proposal) => {
        this.generatingProposal = false;
        const proposalUrl = this.proposalService.getPdfUrl(proposal.uniqueToken);

        // Open PDF in new tab
        window.open(proposalUrl, '_blank');

        // Copy to clipboard
        navigator.clipboard.writeText(proposalUrl).then(() => {
          this.toaster.success(
            `Proposta gerada com sucesso! PDF aberto em nova aba e link copiado para a área de transferência.`,
            'Sucesso',
            { life: 5000 }
          );
        }).catch(() => {
          this.toaster.success(
            `Proposta gerada e aberta em nova aba! Link: ${proposalUrl}`,
            'Sucesso',
            { life: 8000 }
          );
        });
      },
      error: (err) => {
        this.generatingProposal = false;
        this.toaster.error(
          'Erro ao gerar proposta. Tente novamente.',
          'Erro'
        );
        console.error('Error generating proposal:', err);
      }
    });
  }
}
