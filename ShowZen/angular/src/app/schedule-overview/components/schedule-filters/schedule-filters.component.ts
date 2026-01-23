import { Component, Input, Output, EventEmitter, OnInit, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ArtistDto } from '../../../proxy/services/dtos/artists/models';
import { EventStatus, EventType } from '../../../proxy/entities/events';
import { ScheduleFilters } from '../../models/schedule-models';

@Component({
    selector: 'app-schedule-filters',
    templateUrl: './schedule-filters.component.html',
    styleUrls: ['./schedule-filters.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class ScheduleFiltersComponent implements OnInit, OnChanges {
    @Input() artists: ArtistDto[] = [];
    @Input() filters!: ScheduleFilters;

    @Output() filtersChange = new EventEmitter<ScheduleFilters>();

    filterForm!: FormGroup;

    // Dropdown UI State
    activeDropdown: string | null = null;
    showMobileFilters = false;

    // Enums for template
    eventStatuses = [
        { value: EventStatus.Lead, label: 'Lead', icon: '⚪', color: 'bg-secondary' },
        { value: EventStatus.ProposalSent, label: 'Proposta Enviada', icon: '🟡', color: 'bg-warning' },
        { value: EventStatus.Confirmed, label: 'Confirmado', icon: '🟢', color: 'bg-success' },
        { value: EventStatus.InProgress, label: 'Em Progresso', icon: '🔵', color: 'bg-primary' },
        { value: EventStatus.Completed, label: 'Completo', icon: '🟣', color: 'bg-info' },
        { value: EventStatus.Cancelled, label: 'Cancelado', icon: '🔴', color: 'bg-danger' },
        { value: EventStatus.Lost, label: 'Perdido', icon: '🔴', color: 'bg-danger' }
    ];

    eventTypes = [
        { value: EventType.Show, label: 'Show', icon: '🎵' },
        { value: EventType.Lecture, label: 'Palestra', icon: '🎤' },
        { value: EventType.Workshop, label: 'Workshop', icon: '👨‍🏫' },
        { value: EventType.TvAppearance, label: 'TV', icon: '📺' },
        { value: EventType.RadioAppearance, label: 'Rádio', icon: '📻' },
        { value: EventType.PodcastAppearance, label: 'Podcast', icon: '🎙️' },
        { value: EventType.InstitutionalEvent, label: 'Institucional', icon: '🏛️' },
        { value: EventType.Corporate, label: 'Corporativo', icon: '🏢' },
        { value: EventType.Training, label: 'Treinamento', icon: '📚' },
        { value: EventType.Other, label: 'Outro', icon: '❓' }
    ];

    periodPresets = [
        { label: 'Todos', days: 9999 },
        { label: 'Ano Atual', days: -2 },
        { label: 'Ano Passado', days: -3 },
        { label: 'Próximos 6 meses', days: 180 },
        { label: 'Próximos 12 meses', days: 365 },
        { label: 'Próximos 30 dias', days: 30 },
        { label: 'Próximos 60 dias', days: 60 },
        { label: 'Mês atual', days: -1 }
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['filters'] && this.filterForm) {
            this.updateFormState();
        }
    }

    private initForm(): void {
        const periodDays = this.calculatePeriodDays();

        this.filterForm = this.fb.group({
            selectedArtists: [this.filters?.artistIds || []],
            selectedStatuses: [this.filters?.statuses || []],
            selectedTypes: [this.filters?.types || []],
            periodPreset: [periodDays]
        });
    }

    private updateFormState(): void {
        if (!this.filters) return;

        const periodDays = this.calculatePeriodDays();

        this.filterForm.patchValue({
            selectedArtists: this.filters.artistIds || [],
            selectedStatuses: this.filters.statuses || [],
            selectedTypes: this.filters.types || [],
            periodPreset: periodDays
        }, { emitEvent: false });
    }

    private calculatePeriodDays(): number {
        let periodDays = 30; // Default
        if (this.filters?.dateRange) {
            const start = new Date(this.filters.dateRange.start);
            const end = new Date(this.filters.dateRange.end);

            // To compare accurately we should check the logic used in selectPeriod
            // But checking the difference is a good approximation for presets
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Check specific logic for special periods (year, month etc)
            // Ideally we should persist the preset ID, but reverse engineering works
            const match = this.periodPresets.find(p => p.days === diffDays);
            if (match) {
                periodDays = match.days;
            } else if (diffDays > 25 && diffDays < 35) {
                periodDays = 30;
            } else if (diffDays > 360 && diffDays < 370) {
                // Check for "Year" (-2 or -3) -> hard to distinguish from date comparison solely
                // Fallback to days approx or keep existing logic
            }

            // Refined check for special values
            // If the start date is Jan 1st and end is Dec 31st of the same year
            if (start.getDate() === 1 && start.getMonth() === 0 && end.getDate() === 31 && end.getMonth() === 11) {
                const currentYear = new Date().getFullYear();
                if (start.getFullYear() === currentYear) return -2; // This year
                if (start.getFullYear() === currentYear - 1) return -3; // Last year
            }
        }
        return periodDays;
    }

    // Dropdown Toggling
    toggleDropdown(name: string, event: Event): void {
        event.stopPropagation();
        if (this.activeDropdown === name) {
            this.activeDropdown = null;
        } else {
            this.activeDropdown = name;
        }
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
        this.activeDropdown = null;
    }

    stopProp(event: Event): void {
        event.stopPropagation();
    }

    toggleMobileFilters(): void {
        this.showMobileFilters = !this.showMobileFilters;
        // Prevent body scroll when drawer is open
        if (this.showMobileFilters) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    getActiveFiltersCount(): number {
        let count = 0;
        const artists = this.filterForm?.get('selectedArtists')?.value || [];
        const statuses = this.filterForm?.get('selectedStatuses')?.value || [];
        const types = this.filterForm?.get('selectedTypes')?.value || [];
        count = artists.length + statuses.length + types.length;
        return count;
    }

    // Filter Logic

    selectPeriod(days: number): void {
        this.filterForm.patchValue({ periodPreset: days });

        const now = new Date();
        let startDate = new Date(now);
        let endDate: Date;

        switch (days) {
            case 9999: // Todos (Range: -2 Years to +2 Years)
                startDate = new Date(now.getFullYear() - 2, 0, 1);
                endDate = new Date(now.getFullYear() + 2, 11, 31);
                break;
            case -2: // Ano Atual
                startDate = new Date(now.getFullYear(), 0, 1);
                endDate = new Date(now.getFullYear(), 11, 31);
                break;
            case -3: // Ano Passado
                startDate = new Date(now.getFullYear() - 1, 0, 1);
                endDate = new Date(now.getFullYear() - 1, 11, 31);
                break;
            case -1: // Mês atual (1st to Last Day)
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                break;
            case 30:
            case 60:
            case 180:
            case 365:
            default:
                // Próximos X dias (Start = Now)
                endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + days);
                break;
        }

        this.filters.dateRange = {
            start: startDate,
            end: endDate
        };

        this.activeDropdown = null; // Close dropdown after selection
        this.emitFilters();
    }

    // Generic Multi-Select Logic
    isSelected(controlName: string, value: any): boolean {
        const current = this.filterForm.get(controlName)?.value || [];
        return current.includes(value);
    }

    toggleSelection(controlName: string, value: any): void {
        const current = this.filterForm.get(controlName)?.value || [];
        const index = current.indexOf(value);

        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(value);
        }

        this.filterForm.patchValue({ [controlName]: current });
        this.emitFilters();
    }

    clearFilters(): void {
        this.filterForm.patchValue({
            selectedArtists: [],
            selectedStatuses: [],
            selectedTypes: [],
            periodPreset: 30
        });
        this.selectPeriod(30); // Resets period and emits
    }

    private emitFilters(): void {
        const value = this.filterForm.value;

        const updatedFilters: ScheduleFilters = {
            artistIds: value.selectedArtists || [],
            statuses: value.selectedStatuses || [],
            types: value.selectedTypes || [],
            dateRange: this.filters.dateRange
        };

        this.filtersChange.emit(updatedFilters);
    }

    // Label Helpers
    getPeriodLabel(): string {
        const days = this.filterForm.get('periodPreset')?.value;
        const preset = this.periodPresets.find(p => p.days === days);
        return preset ? preset.label : 'Período';
    }

    getLabel(controlName: string, list: any[], valueProp: string, labelProp: string, defaultText: string): string {
        const selected = this.filterForm.get(controlName)?.value || [];
        if (selected.length === 0) return defaultText;
        if (selected.length === 1) {
            const item = list.find(i => i[valueProp] === selected[0]);
            return item ? (item.icon ? item.icon + ' ' : '') + item[labelProp] : defaultText;
        }
        return `${selected.length} selecionados`;
    }
}
