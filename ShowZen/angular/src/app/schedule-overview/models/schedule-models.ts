export enum ViewMode {
    Month = 'month',
    Week = 'week',
    List = 'list'
}

export interface ScheduleFilters {
    artistIds: string[];
    statuses: number[];
    types: number[];
    dateRange: {
        start: Date;
        end: Date;
    };
}
