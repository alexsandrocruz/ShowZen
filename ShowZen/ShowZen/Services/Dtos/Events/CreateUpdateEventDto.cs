using System;
using System.ComponentModel.DataAnnotations;
using ShowZen.Entities.Events;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class CreateUpdateEventDto
{
    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    public EventType Type { get; set; }
    
    [Required]
    public DateTime StartDateTime { get; set; }
    
    public DateTime? EndDateTime { get; set; }
    
    [Required]
    public Guid ArtistId { get; set; }
    
    [Required]
    public Guid ClientId { get; set; }
    
    public Guid? LocationId { get; set; }
    
    [StringLength(2000)]
    public string? Description { get; set; }
    
    public int? ExpectedAudience { get; set; }
    
    public decimal? Fee { get; set; }
    
    public EventStatus? Status { get; set; }
    
    [StringLength(2000)]
    public string? Notes { get; set; }
}


public class CreateUpdateLocationDto
{
    [Required]
    [StringLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [StringLength(500)]
    public string Address { get; set; } = string.Empty;
    
    [Required]
    [StringLength(100)]
    public string City { get; set; } = string.Empty;
    
    [Required]
    [StringLength(2)]
    public string State { get; set; } = string.Empty;
    
    [StringLength(20)]
    public string? ZipCode { get; set; }
    
    [StringLength(50)]
    public string? Capacity { get; set; }
    
    [StringLength(1000)]
    public string? Notes { get; set; }
}

public class GetLocationListDto : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
