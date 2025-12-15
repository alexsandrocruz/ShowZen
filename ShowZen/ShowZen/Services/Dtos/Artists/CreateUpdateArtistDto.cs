using System.ComponentModel.DataAnnotations;
using ShowZen.Entities.Artists;

namespace ShowZen.Services.Dtos.Artists;

public class CreateUpdateArtistDto
{
    [Required]
    [StringLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    public ArtistType Type { get; set; }
    
    [Required]
    [StringLength(2000)]
    public string Biography { get; set; } = string.Empty;
    
    [StringLength(100)]
    public string? InstagramHandle { get; set; }
    
    [StringLength(500)]
    public string? WebsiteUrl { get; set; }
}
