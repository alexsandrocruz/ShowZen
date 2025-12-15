using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Dashboard;

public class DashboardStatsDto
{
    public int TotalEvents { get; set; }
    public int ConfirmedEvents { get; set; }
    public decimal ExpectedRevenue { get; set; }
    public int OpenLeads { get; set; }
    public List<EventsByStatusDto> EventsByStatus { get; set; } = new();
    public List<UpcomingEventDto> UpcomingEvents { get; set; } = new();
    public List<RevenueByMonthDto> RevenueByMonth { get; set; } = new();
}

public class EventsByStatusDto
{
    public string Status { get; set; } = string.Empty;
    public int Count { get; set; }
    public string Color { get; set; } = string.Empty;
}

public class UpcomingEventDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string ArtistName { get; set; } = string.Empty;
    public string ClientName { get; set; } = string.Empty;
    public decimal? Fee { get; set; }
    public string Status { get; set; } = string.Empty;
    public string StatusColor { get; set; } = string.Empty;
}

public class RevenueByMonthDto
{
    public string Month { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}

public class GetDashboardStatsInput
{
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}
