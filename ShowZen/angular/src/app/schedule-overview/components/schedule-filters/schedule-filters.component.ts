import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
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
export class ScheduleFiltersComponent implements OnInit {
    @Input() artists: ArtistDto[] = [];
    @Input() filters!: ScheduleFilters;

    @Output() filtersChange = new EventEmitter<ScheduleFilters>();

    filterForm!: FormGroup;

    // Dropdown UI State
    activeDropdown: string | null = null;

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
        { label: 'Próximos 7 dias', days: 7 },
        { label: 'Próximos 30 dias', days: 30 },
        { label: 'Próximos 60 dias', days: 60 },
        { label: 'Mês atual', days: -1 }
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        // Calculate period days difference or default to 30
        let periodDays = 30;
        if (this.filters?.dateRange) {
            const start = new Date(this.filters.dateRange.start);
            const end = new Date(this.filters.dateRange.end);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Check if it matches 'Current Month' logic (roughly) or specific presets
            // For now, let's try to match exact presets, otherwise default to 30 to avoid weird UI state
            // Or simple logic: use the preset that matches closely or keep 30 if custom
            const match = this.periodPresets.find(p => p.days === diffDays);
            if (match) {
                periodDays = match.days;
            } else if (diffDays > 25 && diffDays < 35) {
                // Close enough to 30
                periodDays = 30;
            }
            // Check for "Current Month" special case (-1 logic is internal to component, persistence saves dates)
            // If the saved dates look like current month, we could set -1, but 30 is safer fallback for now.
        }

        this.filterForm = this.fb.group({
            selectedArtists: [this.filters?.artistIds || []],
            selectedStatuses: [this.filters?.statuses || []],
            selectedTypes: [this.filters?.types || []],
            periodPreset: [periodDays]
        });

        // We manually trigger emitFilters on changes now due to complex UI
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

    // Filter Logic

    selectPeriod(days: number): void {
        this.filterForm.patchValue({ periodPreset: days });

        const now = new Date();
        let endDate: Date;

        if (days === -1) {
            endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        } else {
            endDate = new Date(now);
            endDate.setDate(endDate.getDate() + days);
        }

        this.filters.dateRange = {
            start: now,
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
