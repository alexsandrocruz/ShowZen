import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PermissionDirective, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { EventService } from '../proxy/services/events/event.service';
import { ArtistService } from '../proxy/services/artists/artist.service';
import { ViewMode, ScheduleFilters } from './models/schedule-models';
import {
  GetScheduleOverviewInput,
  ScheduleOverviewDto,
  EventSummaryDto
} from '../proxy/services/dtos/events/models';
import { EventStatus, EventType } from '../proxy/entities/events';
import { ArtistDto } from '../proxy/services/dtos/artists/models';

// Import components
import { CalendarMonthComponent } from './components/calendar-month/calendar-month.component';
import { CalendarWeekComponent } from './components/calendar-week/calendar-week.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { ScheduleFiltersComponent } from './components/schedule-filters/schedule-filters.component';
import { EventQuickModalComponent } from './components/event-quick-modal/event-quick-modal.component';
import { ConflictAlertComponent } from './components/conflict-alert/conflict-alert.component';

@Component({
  selector: 'app-schedule-overview',
  templateUrl: './schedule-overview.component.html',
  styleUrls: ['./schedule-overview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PermissionDirective,
    CalendarMonthComponent,
    CalendarWeekComponent,
    EventsGridComponent,
    ScheduleFiltersComponent,
    // EventQuickModalComponent, // Removed as we use page now
    ConflictAlertComponent,
    ThemeSharedModule, // Required for abpLocalization
    CoreModule
  ]
})
export class ScheduleOverviewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // View state
  currentView: ViewMode = ViewMode.List;
  ViewMode = ViewMode;

  // Data
  scheduleData: ScheduleOverviewDto | null = null;
  artists: ArtistDto[] = [];
  loading = false;

  // Storage Keys
  private readonly STORAGE_KEYS = {
    VIEW_MODE: 'showzen_schedule_view_mode',
    FILTERS: 'showzen_schedule_filters'
  };

  // Filters
  filters: ScheduleFilters = {
    artistIds: [],
    statuses: [],
    types: [],
    dateRange: {
      start: new Date(new Date().getFullYear(), 0, 1),
      end: new Date(new Date().getFullYear(), 11, 31)
    }
  };

  constructor(
    private eventService: EventService,
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadState();
    this.loadArtists();
    this.loadSchedule();
  }

  private saveState(): void {
    localStorage.setItem(this.STORAGE_KEYS.VIEW_MODE, this.currentView);
    localStorage.setItem(this.STORAGE_KEYS.FILTERS, JSON.stringify({
      ...this.filters,
      dateRange: undefined
    }));
  }

  private loadState(): void {
    const savedView = localStorage.getItem(this.STORAGE_KEYS.VIEW_MODE);
    if (savedView && Object.values(ViewMode).includes(savedView as ViewMode)) {
      this.currentView = savedView as ViewMode;
    }

    const savedFilters = localStorage.getItem(this.STORAGE_KEYS.FILTERS);
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        this.filters = {
          ...this.filters,
          ...parsed,
          dateRange: this.filters.dateRange
        };
      } catch (e) {
        console.error('Failed to load filters', e);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadArtists(): void {
    this.artistService.getList({
      maxResultCount: 100,
      skipCount: 0
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.artists = result.items || [];
      });
  }

  loadSchedule(): void {
    this.loading = true;

    const input: GetScheduleOverviewInput = {
      startDate: this.filters.dateRange.start.toISOString(),
      endDate: this.filters.dateRange.end.toISOString(),
      artistIds: this.filters.artistIds || [],
      statuses: (this.filters.statuses || []) as EventStatus[],
      types: (this.filters.types || []) as EventType[],
      maxResultCount: 1000,
      skipCount: 0
    };

    this.eventService.queryScheduleOverview(input)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.scheduleData = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading schedule:', err);
          this.loading = false;
        }
      });
  }

  onViewModeChange(mode: ViewMode): void {
    this.currentView = mode;
    this.saveState();
  }

  onFiltersChange(filters: ScheduleFilters): void {
    this.filters = filters;
    this.saveState();
    this.loadSchedule();
  }

  onNewEvent(): void {
    this.router.navigate(['/events/new']);
  }

  onEventSaved(): void {
    this.loadSchedule();
  }

  onEventClick(event: EventSummaryDto): void {
    if (event.id) {
      this.router.navigate(['/events/edit', event.id]);
    }
  }

  onDateClick(date: Date): void {
    console.log('Date clicked:', date);
  }

  private getDatePlusDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Active Filter Helpers
  get activeArtistsLabel(): string {
    const ids = this.filters.artistIds || [];
    if (ids.length === 0) return '';

    const names = ids
      .map(id => this.artists.find(a => a.id === id)?.name)
      .filter(n => !!n) as string[];

    if (names.length === 0) return `${ids.length} Artistas`; // Fallback if names not found

    if (names.length <= 2) {
      return names.join(', ');
    } else {
      return `${names.slice(0, 2).join(', ')} +${names.length - 2}`;
    }
  }

  get activeStatusesLabel(): string {
    const count = this.filters.statuses?.length || 0;
    if (count === 0) return '';
    // We could map enum values to labels here if needed
    // Simple approach: just count
    return `${count} Status`;
  }

  get activeTypesLabel(): string {
    const count = this.filters.types?.length || 0;
    if (count === 0) return '';
    return `${count} Tipos`;
  }

  get activePeriodLabel(): string {
    if (!this.filters.dateRange) return 'Todos';
    const start = this.filters.dateRange.start;
    const end = this.filters.dateRange.end;
    return `${this.formatDate(start)} - ${this.formatDate(end)}`;
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  }

  hasActiveFilters(): boolean {
    return (this.filters.artistIds?.length || 0) > 0 ||
      (this.filters.statuses?.length || 0) > 0 ||
      (this.filters.types?.length || 0) > 0;
  }
}
