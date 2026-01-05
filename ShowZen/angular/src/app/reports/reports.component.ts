import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { BrazilMapComponent } from './components/brazil-map/brazil-map.component';
import { EvolutionChartComponent } from './components/evolution-chart/evolution-chart.component';
import { ArtistService } from '../proxy/services/artists/artist.service';
import { ArtistDto } from '../proxy/services/dtos/artists/models';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        NgbDatepickerModule,
        BrazilMapComponent,
        EvolutionChartComponent
    ],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
    template: `
    <div class="page-container">
      <!-- Premium Header -->
      <div class="page-header">
        <div class="page-header-content">
          <div class="page-title-wrapper">
            <i class="fas fa-chart-bar page-icon"></i>
            <div>
              <h2 class="page-title">Relatórios e Insights</h2>
              <p class="page-subtitle">Visualize a performance e distribuição dos seus eventos</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row align-items-end">
            <div class="col-md-3">
              <label class="form-label">Artista</label>
              <select class="form-select" [(ngModel)]="selectedArtistId" (change)="onFilterChange()">
                <option [value]="null">Todos os Artistas</option>
                <option *ngFor="let artist of artists" [value]="artist.id">{{ artist.name }}</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Data Início</label>
              <input class="form-control" placeholder="YYYY-MM-DD" [(ngModel)]="startDate" ngbDatepicker #d1="ngbDatepicker" (click)="d1.toggle()" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Data Fim</label>
              <input class="form-control" placeholder="YYYY-MM-DD" [(ngModel)]="endDate" ngbDatepicker #d2="ngbDatepicker" (click)="d2.toggle()" />
            </div>
            <div class="col-md-3">
              <button class="btn btn-primary w-100" (click)="applyFilters()">
                <i class="fa fa-filter me-1"></i> Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="row">
        <div class="col-lg-6 mb-4">
          <app-brazil-map></app-brazil-map>
        </div>
        <div class="col-lg-6 mb-4">
          <app-evolution-chart></app-evolution-chart>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page-container {
      padding: 1.5rem;
    }
    .page-header {
      margin-bottom: 1.5rem;
    }
    .page-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .page-title-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .page-icon {
      font-size: 2rem;
      color: #007bff;
    }
    .page-title {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 600;
    }
    .page-subtitle {
      margin: 0;
      color: #6c757d;
      font-size: 0.9rem;
    }
  `]
})
export class ReportsComponent implements OnInit {
    artists: ArtistDto[] = [];
    selectedArtistId: string | null = null;
    startDate: Date | null = null;
    endDate: Date | null = null;

    constructor(private artistService: ArtistService) { }

    ngOnInit(): void {
        this.loadArtists();
        this.setDefaultDates();
    }

    private loadArtists(): void {
        this.artistService.getList({ maxResultCount: 100 }).subscribe(res => {
            this.artists = res.items || [];
        });
    }

    private setDefaultDates(): void {
        const now = new Date();
        this.endDate = now;
        this.startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    }

    onFilterChange(): void {
        console.log('Filter changed:', this.selectedArtistId);
    }

    applyFilters(): void {
        console.log('Applying filters:', {
            artistId: this.selectedArtistId,
            startDate: this.startDate,
            endDate: this.endDate
        });
        // In production, this would call an API to get filtered data
    }
}
