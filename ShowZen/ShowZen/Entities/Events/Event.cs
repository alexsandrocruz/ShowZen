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
    
    public Guid? LocalPartnerId { get; set; }
    public Client? LocalPartner { get; set; }
    
    public Guid? LocationId { get; set; }
    public Location? Location { get; set; }
    
    // Event Details
    public string? Description { get; set; }
    public int? ExpectedAudience { get; set; }
    public decimal? Fee { get; set; }
    public string? Notes { get; set; }
    
    public ContractType ContractType { get; set; }
    public string? Duration { get; set; }
    public string? StartTime { get; set; }
    
    // Financial - Production
    public bool HasProduction { get; set; }
    public decimal? ProductionValue { get; set; }
    public decimal? ProductionPercentage { get; set; }
    
    // Financial - Negotiation
    public NegotiationType NegotiationType { get; set; }
    public decimal? GuaranteeValue { get; set; }
    public decimal? TicketPercentage { get; set; }
    public decimal? DiscountValue { get; set; }
    
    // Financial - Taxes
    public decimal TaxPercentage { get; set; }
    public decimal TaxValue { get; set; }
    
    // Collections
    public ICollection<EventCommission> Commissions { get; set; }
    
    // Conflict Detection
    public bool HasConflict { get; set; }
    public Guid? SuggestedAlternativeArtistId { get; set; }
    
    public Event()
    {
        Status = EventStatus.Lead;
        HasConflict = false;
        ContractType = ContractType.Private;
        NegotiationType = NegotiationType.Fee;
        Commissions = new List<EventCommission>();
    }
}
