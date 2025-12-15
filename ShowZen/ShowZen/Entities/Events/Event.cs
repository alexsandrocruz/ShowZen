using System;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Entities.Events;

public class Event : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }
    
    public string Title { get; set; } = string.Empty;
    public EventType Type { get; set; }
    public EventStatus Status { get; set; }
    public DateTime StartDateTime { get; set; }
    public DateTime? EndDateTime { get; set; }
    
    // Relationships
    public Guid ArtistId { get; set; }
    public Artist Artist { get; set; } = null!;
    
    public Guid ClientId { get; set; }
    public Client Client { get; set; } = null!;
    
    public Guid? LocationId { get; set; }
    public Location? Location { get; set; }
    
    // Event Details
    public string? Description { get; set; }
    public int? ExpectedAudience { get; set; }
    public decimal? Fee { get; set; }
    public string? Notes { get; set; }
    
    // Conflict Detection
    public bool HasConflict { get; set; }
    public Guid? SuggestedAlternativeArtistId { get; set; }
    
    public Event()
    {
        Status = EventStatus.Lead;
        HasConflict = false;
    }
}
