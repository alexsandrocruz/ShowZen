import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../proxy/services/reports/report.service';
import { ArtistService } from '../../proxy/services/artists/artist.service';
import type { MonthlyReportItemDto, MonthlyReportInput } from '../../proxy/services/dtos/reports/models';
import type { ArtistDto } from '../../proxy/services/dtos/artists/models';

@Component({
  selector: 'app-monthly-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.scss'],
})
export class MonthlyReportComponent implements OnInit {
  private reportService = inject(ReportService);
  private artistService = inject(ArtistService);

  // Filters
  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();
  selectedArtistIds: string[] = [];
  artists: ArtistDto[] = [];

  // Data
  events: MonthlyReportItemDto[] = [];
  loading = false;
  loaded = false;

  // Month names in Portuguese
  monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  ngOnInit(): void {
    this.loadArtists();
    this.loadReport();
  }

  loadArtists(): void {
    this.artistService.getList({ maxResultCount: 100 }).subscribe(res => {
      this.artists = res.items || [];
    });
  }

  loadReport(): void {
    this.loading = true;
    const input: MonthlyReportInput = {
      year: this.selectedYear,
      month: this.selectedMonth,
      artistIds: this.selectedArtistIds.length > 0 ? this.selectedArtistIds : undefined,
    };

    this.reportService.getMonthlyConfirmedEvents(input).subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
        this.loaded = true;
      },
      error: () => {
        this.loading = false;
        this.loaded = true;
      },
    });
  }

  applyFilters(): void {
    this.loaded = false;
    this.loadReport();
  }

  get monthYearLabel(): string {
    return `${this.monthNames[this.selectedMonth - 1]} ${this.selectedYear}`;
  }

  isDownloadingPdf = false;

  downloadPdf(): void {
    if (this.isDownloadingPdf) return;
    
    this.isDownloadingPdf = true;
    const input: MonthlyReportInput = {
      year: this.selectedYear,
      month: this.selectedMonth,
      artistIds: this.selectedArtistIds.length > 0 ? this.selectedArtistIds : undefined,
    };
    
    this.reportService.getMonthlyConfirmedEventsPdfBlob(input).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Agenda-${this.monthNames[this.selectedMonth - 1]}-${this.selectedYear}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        this.isDownloadingPdf = false;
      },
      error: () => {
        this.isDownloadingPdf = false;
        alert('Erro ao tentar baixar o PDF.');
      }
    });
  }

  isSharing = false;

  async shareReport(): Promise<void> {
    if (this.isSharing) return;
    
    this.isSharing = true;
    const input: MonthlyReportInput = {
      year: this.selectedYear,
      month: this.selectedMonth,
      artistIds: this.selectedArtistIds.length > 0 ? this.selectedArtistIds : undefined,
    };
    
    this.reportService.getMonthlyConfirmedEventsPdfBlob(input).subscribe({
      next: async (blob: Blob) => {
        const fileName = `Agenda-${this.monthNames[this.selectedMonth - 1]}-${this.selectedYear}.pdf`;
        const file = new File([blob], fileName, { type: 'application/pdf' });
        
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: fileName,
              text: 'Confira nossa agenda mensal de eventos confirmados.'
            });
          } catch (error) {
            console.error('Erro ao compartilhar:', error);
          }
        } else {
          this.fallbackToTextShare();
        }
        this.isSharing = false;
      },
      error: () => {
        this.isSharing = false;
        alert('Erro ao tentar gerar o PDF para compartilhamento.');
      }
    });
  }

  private fallbackToTextShare(): void {
    const text = `📅 *Agenda - ${this.monthYearLabel}*\n\n` +
      this.events.map((e, i) =>
        `${i + 1}. *${e.startDateTime.substring(0, 10)}* - ${e.city}\n` +
        `   ${e.title}\n` +
        `   Contato: ${e.contactName}${e.contactPhone ? ` | ${e.contactPhone}` : ''}`
      ).join('\n\n') +
      `\n\n_Total: ${this.events.length} evento(s) confirmado(s)_`;

    this.fallbackCopy(text);
    alert('O seu sistema não suporta envio direto de formulários PDF pelo navegador. Os dados da agenda em formato de texto foram copiados para sua área de transferência!');
  }

  private fallbackCopy(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Texto copiado para a área de transferência!');
    }).catch(() => {
      alert('Não foi possível copiar. Selecione o texto manualmente.');
    });
  }

  formatPhone(phone?: string): string {
    if (!phone) return '—';
    // Remove non-digits
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11) {
      return `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7)}`;
    }
    if (digits.length === 10) {
      return `(${digits.substring(0, 2)}) ${digits.substring(2, 6)}-${digits.substring(6)}`;
    }
    return phone;
  }
}
