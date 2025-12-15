using System;
using Volo.Abp.Domain.Entities;

namespace ShowZen.Entities.Artists;

public class ArtistSpecialty : Entity<Guid>
{
    public Guid ArtistId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    
    // Navigation property
    public Artist Artist { get; set; } = null!;
}
