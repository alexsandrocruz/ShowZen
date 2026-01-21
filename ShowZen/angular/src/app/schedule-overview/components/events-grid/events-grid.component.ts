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

  // Share Modal State
  showShareModal = false;
  shareModalProposalUrl = '';
  shareModalEventTitle = '';

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

        if (this.isMobile()) {
          // Mobile: Open PDF directly for viewing
          this.openUrlMobile(proposalUrl);

          // After opening, show share option if available
          if (navigator.share) {
            setTimeout(() => {
              this.showMobileShareOption(proposalUrl, event.title, proposal.uniqueToken);
            }, 500);
          } else {
            this.toaster.success(
              `Proposta gerada! Use o menu do navegador para compartilhar.`,
              'Sucesso',
              { life: 4000 }
            );
          }
        } else {
          // Desktop: Open in new tab and copy link
          this.openUrlMobile(proposalUrl);
          navigator.clipboard.writeText(proposalUrl).then(() => {
            this.toaster.success(
              `Proposta gerada! Link copiado para a área de transferência.`,
              'Sucesso',
              { life: 5000 }
            );
          }).catch(() => {
            this.toaster.success(
              `Proposta gerada com sucesso!`,
              'Sucesso',
              { life: 3000 }
            );
          });
        }
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

  /**
   * Check if running on mobile device
   */
  private isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Shows a toast with share option on mobile using Web Share API
   */
  private showMobileShareOption(url: string, eventTitle: string, token: string): void {
    this.shareModalProposalUrl = url;
    this.shareModalEventTitle = eventTitle;
    this.showShareModal = true;
  }

  closeShareModal(): void {
    this.showShareModal = false;
  }

  onShareProposal(): void {
    this.shareProposal(this.shareModalProposalUrl, this.shareModalEventTitle);
    this.closeShareModal();
  }

  onCopyLink(): void {
    navigator.clipboard.writeText(this.shareModalProposalUrl).then(() => {
      this.toaster.success('Link copiado!', 'Sucesso', { life: 2000 });
    });
    this.closeShareModal();
  }

  /**
   * Share proposal using Web Share API (works great on iOS and modern Android)
   */
  private async shareProposal(url: string, eventTitle: string): Promise<void> {
    if (!navigator.share) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      this.toaster.info('Link copiado!', 'Info');
      return;
    }

    try {
      await navigator.share({
        title: `Proposta - ${eventTitle}`,
        text: `Confira a proposta para o evento: ${eventTitle}`,
        url: url
      });
    } catch (err) {
      // User cancelled or share failed - this is normal, don't show error
      console.log('Share cancelled or failed:', err);
    }
  }

  /**
   * Opens a URL in a new tab using a temporary anchor click.
   * This method works reliably on mobile browsers which block window.open in async contexts.
   */
  private openUrlMobile(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
