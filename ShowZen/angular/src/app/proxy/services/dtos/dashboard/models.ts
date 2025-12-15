
export interface DashboardStatsDto {
  totalEvents: number;
  confirmedEvents: number;
  expectedRevenue: number;
  openLeads: number;
  eventsByStatus: EventsByStatusDto[];
  upcomingEvents: UpcomingEventDto[];
  revenueByMonth: RevenueByMonthDto[];
}

export interface EventsByStatusDto {
  status?: string;
  count: number;
  color?: string;
}

export interface GetDashboardStatsInput {
  startDate?: string;
  endDate?: string;
}

export interface RevenueByMonthDto {
  month?: string;
  amount: number;
}

export interface UpcomingEventDto {
  id?: string;
  title?: string;
  date?: string;
  artistName?: string;
  clientName?: string;
  fee?: number;
  status?: string;
  statusColor?: string;
}
