using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class ScheduleOverviewDto
{
    /// <summary>
    /// List of events in the requested period
    /// </summary>
    public List<EventSummaryDto> Events { get; set; } = new();
    
    /// <summary>
    /// Daily availability status map (Date -> Status)
    /// Useful for calendar view to show free/partial/busy badges
    /// </summary>
    public Dictionary<DateTime, AvailabilityStatus> DailyAvailability { get; set; } = new();
    
    /// <summary>
    /// Total number of events (for pagination)
    /// </summary>
    public int TotalCount { get; set; }
    
    /// <summary>
    /// Number of events with detected conflicts
    /// </summary>
    public int ConflictsCount { get; set; }
    
    /// <summary>
    /// Statistics summary
    /// </summary>
    public ScheduleStatisticsDto Statistics { get; set; } = new();
}

public class ScheduleStatisticsDto
{
    public int ConfirmedEvents { get; set; }
    public int ProposalEvents { get; set; }
    public int LeadEvents { get; set; }
    public decimal TotalConfirmedRevenue { get; set; }
    public decimal TotalProposalRevenue { get; set; }
}
