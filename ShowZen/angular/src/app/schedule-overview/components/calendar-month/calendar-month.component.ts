import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventSummaryDto, AvailabilityStatus } from '../../../proxy/services/dtos/events/models';
import { EventStatus } from '../../../proxy/entities/events';

@Component({
    selector: 'app-calendar-month',
    templateUrl: './calendar-month.component.html',
    styleUrls: ['./calendar-month.component.scss'],
    standalone: true,
    imports: [CommonModule, FullCalendarModule]
})
export class CalendarMonthComponent implements OnChanges {
    @Input() events: EventSummaryDto[] = [];
    @Input() dailyAvailability: Record<string, AvailabilityStatus> = {};

    @Output() eventClick = new EventEmitter<EventSummaryDto>();
    @Output() dateClick = new EventEmitter<Date>();

    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttonText: {
            today: 'Hoje'
        },
        aspectRatio: 1.8, // Wider than tall for compact rows
        fixedWeekCount: true, // Show all weeks for traditional calendar look
        dayMaxEventRows: 3, // Limit events shown per day
        eventDisplay: 'block',
        dateClick: this.handleDateClick.bind(this),
        eventClick: this.handleEventClick.bind(this),
        dayCellDidMount: this.handleDayCellMount.bind(this),
        events: []
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
            backgroundColor: event.artistHexColor || this.getEventStatusColor(event.status!),
            borderColor: event.artistHexColor || this.getEventStatusColor(event.status!),
            extendedProps: {
                event: event
            }
        }));

        this.calendarOptions = {
            ...this.calendarOptions,
            events: calendarEvents
        };
    }

    private handleDateClick(arg: any): void {
        this.dateClick.emit(new Date(arg.dateStr));
    }

    private handleEventClick(arg: any): void {
        const event: EventSummaryDto = arg.event.extendedProps.event;
        this.eventClick.emit(event);
    }

    private handleDayCellMount(arg: any): void {
        const dateStr = arg.date.toISOString().split('T')[0];
        const availability = this.dailyAvailability[dateStr];

        if (availability !== undefined) {
            const badge = this.getAvailabilityBadge(availability);
            const dayNumber = arg.el.querySelector('.fc-daygrid-day-number');
            if (dayNumber) {
                dayNumber.innerHTML += ` ${badge}`;
            }
        }
    }

    private getEventStatusColor(status: EventStatus): string {
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

    private getAvailabilityBadge(status: AvailabilityStatus): string {
        switch (status) {
            case AvailabilityStatus.Free: return '<span class="availability-badge free">🟢</span>';
            case AvailabilityStatus.Partial: return '<span class="availability-badge partial">🟡</span>';
            case AvailabilityStatus.Busy: return '<span class="availability-badge busy">🔴</span>';
            default: return '';
        }
    }
}
