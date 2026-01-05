using System;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class EventCommissionDto : EntityDto<Guid>
{
    public Guid EventId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public decimal Percentage { get; set; }
}

public class CreateUpdateEventCommissionDto
{
    public string Description { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public decimal Percentage { get; set; }
}
