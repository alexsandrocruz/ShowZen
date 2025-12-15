using System;
using ShowZen.Entities.Events;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class GetEventListDto : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public EventType? Type { get; set; }
    public EventStatus? Status { get; set; }
    public Guid? ArtistId { get; set; }
    public Guid? ClientId { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}

public class CalendarEventDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public DateTime Start { get; set; }
    public DateTime? End { get; set; }
    public EventStatus Status { get; set; }
    public string ArtistName { get; set; } = string.Empty;
    public string ClientName { get; set; } = string.Empty;
    public string LocationName { get; set; } = string.Empty;
    public bool HasConflict { get; set; }
}
