using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Entities.Artists;

public class Availability : Entity<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }
    public Guid ArtistId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public AvailabilityType Type { get; set; }
    public string? Notes { get; set; }
    
    // Navigation property
    public Artist Artist { get; set; } = null!;
}
