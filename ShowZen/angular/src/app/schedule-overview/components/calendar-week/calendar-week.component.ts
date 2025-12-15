import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventSummaryDto } from '../../../proxy/services/dtos/events/models';
import { EventStatus } from '../../../proxy/entities/events';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss'],
  standalone: true,
  imports: [CommonModule, FullCalendarModule]
})
export class CalendarWeekComponent implements OnChanges {
  @Input() events: EventSummaryDto[] = [];
  @Output() eventClick = new EventEmitter<EventSummaryDto>();

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    locale: 'pt-br',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    buttonText: {
      today: 'Hoje'
    },
    height: 'auto',
    eventDisplay: 'block',
    eventClick: this.handleEventClick.bind(this),
    events: [],
    slotMinTime: '06:00:00', // Start day at 6 AM
    slotMaxTime: '24:00:00', // End day at midnight
    allDaySlot: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      this.updateCalendarEvents();
    }
  }

  private updateCalendarEvents(): void {
    const calendarEvents: EventInput[] = this.events.map(event => ({
      id: event.id,
      title: `${this.getEventIcon(event.type!)} ${event.artistName}`,
      start: event.startDateTime,
      end: event.endDateTime || event.startDateTime,
      classNames: event.hasConflict ? ['event-conflict'] : [],
      backgroundColor: this.getEventColor(event.status!),
      borderColor: this.getEventColor(event.status!),
      extendedProps: {
        event: event
      }
    }));

    this.calendarOptions = {
      ...this.calendarOptions,
      events: calendarEvents
    };
  }

  private handleEventClick(arg: any): void {
    const event: EventSummaryDto = arg.event.extendedProps.event;
    this.eventClick.emit(event);
  }

  private getEventColor(status: EventStatus): string {
    switch (status) {
      case EventStatus.Confirmed: return '#28a745';
      case EventStatus.ProposalSent: return '#ffc107';
      case EventStatus.InProgress: return '#007bff';
      case EventStatus.Completed: return '#6f42c1';
      case EventStatus.Lead: return '#6c757d';
      case EventStatus.Cancelled:
      case EventStatus.Lost: return '#dc3545';
      default: return '#6c757d';
    }
  }

  private getEventIcon(type: number): string {
    const icons: Record<number, string> = {
      0: '🎵', // Show
      1: '🎤', // Palestra
      2: '👨‍🏫', // Workshop
      3: '📺', // TV/Radio/Podcast
      4: '🏛️', // Institucional
      5: '🏢', // Corporativo
      6: '❓'  // Outro
    };
    return icons[type] || '📅';
  }
}
