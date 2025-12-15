using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Entities.Clients;

public class Client : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }
    
    public string Name { get; set; } = string.Empty;
    public ClientType Type { get; set; }
    public string? Document { get; set; } // CPF/CNPJ
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
    
    public Client()
    {
        IsActive = true;
        LeadStatus = LeadStatus.New;
    }
}
