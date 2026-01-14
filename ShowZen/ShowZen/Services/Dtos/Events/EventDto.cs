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
    
    public Guid? LocationId { get; set; }
    public string? LocationName { get; set; }
    
    public Guid? LocalPartnerId { get; set; }
    public string? LocalPartnerName { get; set; }
    
    // Event Details
    public string? Description { get; set; }
    public int? ExpectedAudience { get; set; }
    public decimal? Fee { get; set; }
    public string? Notes { get; set; }
    
    public ContractType ContractType { get; set; }
    public string? Duration { get; set; }
    public string? StartTime { get; set; }
    
    public bool HasProduction { get; set; }
    public decimal? ProductionValue { get; set; }
    public decimal? ProductionPercentage { get; set; }
    
    public NegotiationType NegotiationType { get; set; }
    public decimal? GuaranteeValue { get; set; }
    public decimal? TicketPercentage { get; set; }
    public decimal? DiscountValue { get; set; }
    
    public decimal TaxPercentage { get; set; }
    public decimal TaxValue { get; set; }
    
    public List<EventCommissionDto> Commissions { get; set; } = new();
    
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
