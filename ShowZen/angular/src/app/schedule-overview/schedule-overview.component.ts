import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    EventQuickModalComponent,
    ConflictAlertComponent,
    ThemeSharedModule, // Required for abpLocalization
    CoreModule
  ]
})
export class ScheduleOverviewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // View state
  currentView: ViewMode = ViewMode.Month;
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
      start: new Date(),
      end: this.getDatePlusDays(new Date(), 30)
    }
  };

  @ViewChild(EventQuickModalComponent) quickModal!: EventQuickModalComponent;

  constructor(
    private eventService: EventService,
    private artistService: ArtistService
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
      dateRange: undefined // Don't persist date range as it usually should be relative to "now" or handled differently
    }));
  }

  private loadState(): void {
    // Load View Mode
    const savedView = localStorage.getItem(this.STORAGE_KEYS.VIEW_MODE);
    if (savedView && Object.values(ViewMode).includes(savedView as ViewMode)) {
      this.currentView = savedView as ViewMode;
    }

    // Load Filters
    const savedFilters = localStorage.getItem(this.STORAGE_KEYS.FILTERS);
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        // Date range is reconstructed in init or separate logic, ensuring we keep defaults if not present
        this.filters = {
          ...this.filters,
          ...parsed,
          dateRange: this.filters.dateRange // Keep default date range
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
    this.quickModal.open();
  }

  onEventSaved(): void {
    this.loadSchedule();
  }

  onEventClick(event: EventSummaryDto): void {
    if (event.id) {
      this.quickModal.edit(event.id);
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
}
