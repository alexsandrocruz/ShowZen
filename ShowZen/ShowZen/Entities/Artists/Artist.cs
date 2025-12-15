using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Entities.Artists;

public class Artist : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }
    
    public string Name { get; set; } = string.Empty;
    public ArtistType Type { get; set; }
    public string Biography { get; set; } = string.Empty;
    public string? PhotoUrl { get; set; }
    public bool IsActive { get; set; }
    public string? InstagramHandle { get; set; }
    public string? WebsiteUrl { get; set; }
    
    // Collections
    public ICollection<ArtistSpecialty> Specialties { get; set; }
    public ICollection<Availability> Availabilities { get; set; }
    
    public Artist()
    {
        Specialties = new List<ArtistSpecialty>();
        Availabilities = new List<Availability>();
        IsActive = true;
    }
}
