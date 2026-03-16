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

    periodPresets: any[] = [
        { label: 'Próximos 30 dias', days: 30 },
        { label: 'Mês atual', days: -1 },
        { label: 'Ano Atual (01/01 - 31/12)', days: -2 },
    ];

    monthPresets: any[] = [];

    private generateDynamicPresets(): void {
        const now = new Date();
        const months = [];
        
        // Next 6 months
        for (let i = 0; i < 8; i++) {
            const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
            const label = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
            // Capitalize first letter
            const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
            
            months.push({
                label: capitalizedLabel,
                days: -10 - i, // Special marker for specific month: -10 = current month, -11 = next, etc.
                month: date.getMonth(),
                year: date.getFullYear()
            });
        }
        this.monthPresets = months;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.generateDynamicPresets();
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
            periodPreset: [periodDays],
            specificDate: ['']
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

        // Handle negative days -10 and below (Specific months)
        if (days <= -10) {
            const preset = this.monthPresets.find(p => p.days === days);
            if (preset) {
                startDate = new Date(preset.year, preset.month, 1);
                endDate = new Date(preset.year, preset.month + 1, 0);
            }
        }

        this.filters.dateRange = {
            start: startDate,
            end: endDate
        };

        this.activeDropdown = null; // Close dropdown after selection
        this.emitFilters();
    }

    onSpecificDateChange(event: any): void {
        const dateStr = event.target.value;
        if (!dateStr) return;

        const date = new Date(dateStr);
        // Jump to month view or just center? 
        // For filters, we expand to +/- 15 days around that date to show context
        const startDate = new Date(date);
        startDate.setDate(startDate.getDate() - 2); // Show 2 days before
        
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 14); // And 2 weeks after

        this.filters.dateRange = {
            start: startDate,
            end: endDate
        };

        this.filterForm.patchValue({ periodPreset: 0 }, { emitEvent: false });
        this.emitFilters();
    }

    prevPeriod(): void {
        const start = new Date(this.filters.dateRange.start);
        const end = new Date(this.filters.dateRange.end);
        
        const diff = end.getTime() - start.getTime();
        
        this.filters.dateRange = {
            start: new Date(start.getTime() - diff - 86400000),
            end: new Date(start.getTime() - 86400000)
        };
        
        this.filterForm.patchValue({ periodPreset: 0 }, { emitEvent: false });
        this.emitFilters();
    }

    nextPeriod(): void {
        const start = new Date(this.filters.dateRange.start);
        const end = new Date(this.filters.dateRange.end);
        
        const diff = end.getTime() - start.getTime();
        
        this.filters.dateRange = {
            start: new Date(end.getTime() + 86400000),
            end: new Date(end.getTime() + diff + 86400000)
        };
        
        this.filterForm.patchValue({ periodPreset: 0 }, { emitEvent: false });
        this.emitFilters();
    }

    // Generic Multi-Select Logic
    isSelected(controlName: string, value: any): boolean {
        const current = this.filterForm.get(controlName)?.value || [];
        // If checking for "Todos" (value === null or 'todos'), return true if list is empty
        if (value === 'todos') {
            return current.length === 0;
        }
        return current.includes(value);
    }

    toggleTodos(controlName: string): void {
        // "Todos" means clearing the selection (empty list = All)
        this.filterForm.patchValue({ [controlName]: [] });
        this.emitFilters();
    }

    toggleSelection(controlName: string, value: any): void {
        const current = this.filterForm.get(controlName)?.value || [];
        const index = current.indexOf(value);

        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(value);
        }

        // If user unselects the last item, it effectively becomes "Todos"?
        // Requirement says "Todos" is default. If list is empty, it is Todos.
        // So if user clicks an item, it gets added. If they unclick, it gets removed.
        // If list becomes empty, Todos is auto-selected.

        this.filterForm.patchValue({ [controlName]: current });
        this.emitFilters();
    }

    clearFilters(): void {
        this.filterForm.patchValue({
            selectedArtists: [],
            selectedStatuses: [],
            selectedTypes: [],
            periodPreset: 30,
            specificDate: ''
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
        const preset = this.periodPresets.find(p => p.days === days) || this.monthPresets.find(p => p.days === days);
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
