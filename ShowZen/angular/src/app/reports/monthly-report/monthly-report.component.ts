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

  get pdfUrl(): string {
    const input: MonthlyReportInput = {
      year: this.selectedYear,
      month: this.selectedMonth,
      artistIds: this.selectedArtistIds.length > 0 ? this.selectedArtistIds : undefined,
    };
    return this.reportService.getMonthlyConfirmedEventsPdfUrl(input);
  }

  downloadPdf(): void {
    window.open(this.pdfUrl, '_blank');
  }

  shareWhatsApp(): void {
    const text = `📅 *Agenda - ${this.monthYearLabel}*\n\n` +
      this.events.map((e, i) =>
        `${i + 1}. *${e.startDateTime.substring(0, 10)}* - ${e.city}\n` +
        `   ${e.title}\n` +
        `   Contato: ${e.contactName}${e.contactPhone ? ` | ${e.contactPhone}` : ''}`
      ).join('\n\n') +
      `\n\n_Total: ${this.events.length} evento(s) confirmado(s)_`;

    if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      // Use Web Share API on mobile
      navigator.share({ text }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      // Desktop: copy to clipboard and open WhatsApp
      this.fallbackCopy(text);
      window.open('https://web.whatsapp.com/', '_blank');
    }
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
