using System;
using System.Collections.Generic;
using ShowZen.Entities.Artists;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Artists;

public class ArtistDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;
    public ArtistType Type { get; set; }
    public string Biography { get; set; } = string.Empty;
    public string? PhotoUrl { get; set; }
    public bool IsActive { get; set; }
    public string? InstagramHandle { get; set; }
    public string? WebsiteUrl { get; set; }
    
    public List<ArtistSpecialtyDto> Specialties { get; set; } = new();
}

public class ArtistSpecialtyDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public class AvailabilityDto : EntityDto<Guid>
{
    public Guid ArtistId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public AvailabilityType Type { get; set; }
    public string? Notes { get; set; }
}
