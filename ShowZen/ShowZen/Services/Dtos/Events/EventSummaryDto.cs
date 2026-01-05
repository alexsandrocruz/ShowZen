using System;
using ShowZen.Entities.Events;

namespace ShowZen.Services.Dtos.Events;

/// <summary>
/// Lightweight event summary for schedule overview
/// </summary>
public class EventSummaryDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public DateTime StartDateTime { get; set; }
    public DateTime? EndDateTime { get; set; }
    
    // Artist info
    public Guid ArtistId { get; set; }
    public string ArtistName { get; set; } = string.Empty;
    
    // Client info
    public Guid ClientId { get; set; }
    public string ClientName { get; set; } = string.Empty;
    
    // Location info
    public Guid? LocationId { get; set; }
    public string? LocationName { get; set; }
    
    // Event details
    public EventStatus Status { get; set; }
    public EventType Type { get; set; }
    public decimal? Fee { get; set; }
    public bool HasConflict { get; set; }
    public int? ExpectedAudience { get; set; }
    
    public string? Duration { get; set; }
    public string? StartTime { get; set; }
    public string? ArtistHexColor { get; set; }
    
    /// <summary>
    /// Duration in hours (calculated from start/end)
    /// </summary>
    public double DurationHours
    {
        get
        {
            var end = EndDateTime ?? StartDateTime.AddHours(2);
            return (end - StartDateTime).TotalHours;
        }
    }
}
