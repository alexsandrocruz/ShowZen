using System;

namespace ShowZen.Services.Dtos.Reports;

public class MonthlyReportItemDto
{
    public Guid Id { get; set; }
    public DateTime StartDateTime { get; set; }
    public string Title { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string ContactName { get; set; } = string.Empty;
    public string? ContactPhone { get; set; }
    public string ArtistName { get; set; } = string.Empty;
    public string? StartTime { get; set; }
    public string? LocationName { get; set; }
}
