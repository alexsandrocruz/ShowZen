export interface DashboardStats {
    totalEvents: number;
    confirmedEvents: number;
    expectedRevenue: number;
    openLeads: number;
    eventsByStatus: EventsByStatus[];
    upcomingEvents: UpcomingEvent[];
    revenueByMonth: RevenueByMonth[];
}

export interface EventsByStatus {
    status: string;
    count: number;
    color: string;
}

export interface UpcomingEvent {
    id: string;
    title: string;
    date: string;
    artistName: string;
    clientName: string;
    fee: number | null;
    status: string;
    statusColor: string;
}

export interface RevenueByMonth {
    month: string;
    amount: number;
}

export interface GetDashboardStatsInput {
    startDate?: string;
    endDate?: string;
}
