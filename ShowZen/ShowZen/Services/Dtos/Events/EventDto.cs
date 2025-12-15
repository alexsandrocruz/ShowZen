using System;
using ShowZen.Entities.Events;
using ShowZen.Services.Dtos.Artists;
using ShowZen.Services.Dtos.Clients;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class EventDto : FullAuditedEntityDto<Guid>
{
    public string Title { get; set; } = string.Empty;
    public EventType Type { get; set; }
    public EventStatus Status { get; set; }
    public DateTime StartDateTime { get; set; }
    public DateTime? EndDateTime { get; set; }
    
    // Relationships
    public Guid ArtistId { get; set; }
    public string ArtistName { get; set; } = string.Empty;
    
    public Guid ClientId { get; set; }
    public string ClientName { get; set; } = string.Empty;
    
    public Guid LocationId { get; set; }
    public string LocationName { get; set; } = string.Empty;
    
    // Event Details
    public string? Description { get; set; }
    public int? ExpectedAudience { get; set; }
    public decimal? Fee { get; set; }
    public string? Notes { get; set; }
    
    // Conflict Detection
    public bool HasConflict { get; set; }
    public Guid? SuggestedAlternativeArtistId { get; set; }
    public string? SuggestedAlternativeArtistName { get; set; }
}

public class LocationDto : EntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string? ZipCode { get; set; }
    public string? Capacity { get; set; }
    public string? Notes { get; set; }
}
