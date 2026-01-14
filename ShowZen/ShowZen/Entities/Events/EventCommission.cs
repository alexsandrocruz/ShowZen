using System;
using Volo.Abp.Domain.Entities;

namespace ShowZen.Entities.Events;

public class EventCommission : Entity<Guid>
{
    public Guid EventId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public decimal Percentage { get; set; }
    
    // Navigation property
    public Event Event { get; set; } = null!;

    public void SetId(Guid id)
    {
        Id = id;
    }
}
