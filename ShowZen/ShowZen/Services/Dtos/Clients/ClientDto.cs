using System;
using ShowZen.Entities.Clients;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Clients;

public class ClientDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;
    public ClientType Type { get; set; }
    public string? Document { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Notes { get; set; }
    public bool IsActive { get; set; }
    
    // CRM Fields
    public LeadStatus LeadStatus { get; set; }
    public DateTime? FirstContactDate { get; set; }
    public DateTime? LastContactDate { get; set; }
}
