using System.ComponentModel.DataAnnotations;
using ShowZen.Entities.Clients;

namespace ShowZen.Services.Dtos.Clients;

public class CreateUpdateClientDto
{
    [Required]
    [StringLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    public ClientType Type { get; set; }
    
    [StringLength(50)]
    public string? Document { get; set; }
    
    [EmailAddress]
    [StringLength(256)]
    public string? Email { get; set; }
    
    [StringLength(50)]
    public string? Phone { get; set; }
    
    [StringLength(500)]
    public string? Address { get; set; }
    
    [StringLength(100)]
    public string? City { get; set; }
    
    [StringLength(2)]
    public string? State { get; set; }
    
    [StringLength(2000)]
    public string? Notes { get; set; }
}
