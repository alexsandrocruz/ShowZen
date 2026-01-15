import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProposalService, ProposalDto } from '../../services/proposal.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-proposal-view',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="proposal-view-container">
      @if (loading) {
        <div class="loading-state">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
          <p class="mt-3">Carregando proposta...</p>
        </div>
      }

      @if (error) {
        <div class="error-state">
          <i class="fa fa-exclamation-circle fa-3x text-danger mb-3"></i>
          <h3>Proposta não encontrada</h3>
          <p>{{ error }}</p>
        </div>
      }

      @if (proposal && !loading && !error) {
        <div class="proposal-header">
          <h2>Proposta Comercial</h2>
          <div class="proposal-info">
            <p><strong>Evento:</strong> {{ proposal.eventTitle }}</p>
            <p><strong>Artista:</strong> {{ proposal.artistName }}</p>
            <p><strong>Cliente:</strong> {{ proposal.clientName }}</p>
            <p class="text-muted small">Gerada em: {{ proposal.generatedAt | date:'dd/MM/yyyy HH:mm' }}</p>
            <p class="text-muted small">Válida até: {{ proposal.expiresAt | date:'dd/MM/yyyy' }}</p>
          </div>
          <div class="proposal-actions">
            <a [href]="pdfUrl" class="btn btn-primary" download>
              <i class="fa fa-download me-2"></i>
              Baixar PDF
            </a>
          </div>
        </div>

        <div class="pdf-viewer">
          <iframe [src]="safePdfUrl" width="100%" height="800px" frameborder="0"></iframe>
        </div>
      }
    </div>
  `,
    styles: [`
    .proposal-view-container {
      min-height: 100vh;
      background: #f8f9fa;
      padding: 2rem;
    }

    .loading-state, .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      text-align: center;
    }

    .proposal-header {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .proposal-header h2 {
      margin-bottom: 1.5rem;
      color: #333;
    }

    .proposal-info p {
      margin-bottom: 0.5rem;
    }

    .proposal-actions {
      margin-top: 1.5rem;
    }

    .pdf-viewer {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .pdf-viewer iframe {
      width: 100%;
      min-height: 800px;
      border: none;
    }
  `]
})
export class ProposalViewComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private proposalService = inject(ProposalService);
    private sanitizer = inject(DomSanitizer);

    proposal: ProposalDto | null = null;
    loading = true;
    error: string | null = null;
    pdfUrl = '';
    safePdfUrl: SafeResourceUrl | null = null;

    ngOnInit(): void {
        const token = this.route.snapshot.paramMap.get('token');

        if (!token) {
            this.error = 'Token de proposta inválido';
            this.loading = false;
            return;
        }

        // Track view
        this.proposalService.trackView({
            token,
            ipAddress: undefined, // Will be captured on backend if needed
            userAgent: navigator.userAgent
        }).subscribe();

        // Load proposal
        this.proposalService.getProposalByToken(token).subscribe({
            next: (proposal) => {
                this.proposal = proposal;
                this.pdfUrl = this.proposalService.getPdfUrl(token);
                this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Não foi possível carregar a proposta. Verifique se o link está correto.';
                this.loading = false;
                console.error('Error loading proposal:', err);
            }
        });
    }
}
