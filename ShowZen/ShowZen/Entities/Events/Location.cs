using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Entities.Events;

public class Location : Entity<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }
    
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string? ZipCode { get; set; }
    public string? Capacity { get; set; }
    public string? Notes { get; set; }
}
