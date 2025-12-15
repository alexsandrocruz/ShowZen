import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import { ScheduleOverviewRoutingModule } from './schedule-overview-routing.module';
import { ScheduleOverviewComponent } from './schedule-overview.component';
import { CalendarMonthComponent } from './components/calendar-month/calendar-month.component';
import { CalendarWeekComponent } from './components/calendar-week/calendar-week.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { ScheduleFiltersComponent } from './components/schedule-filters/schedule-filters.component';
import { EventQuickModalComponent } from './components/event-quick-modal/event-quick-modal.component';
import { ConflictAlertComponent } from './components/conflict-alert/conflict-alert.component';

// ABP modules
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScheduleOverviewRoutingModule,
        FullCalendarModule,
        CoreModule,
        ThemeSharedModule,
        ScheduleOverviewComponent, // Import standalone component
        CalendarMonthComponent,
        CalendarWeekComponent,
        EventsGridComponent,
        ScheduleFiltersComponent,
        EventQuickModalComponent,
        ConflictAlertComponent
    ]
})
export class ScheduleOverviewModule { }
