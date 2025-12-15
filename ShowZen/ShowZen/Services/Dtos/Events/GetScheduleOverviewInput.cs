using System;
using System.Collections.Generic;
using ShowZen.Entities.Events;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Events;

public class GetScheduleOverviewInput : PagedAndSortedResultRequestDto
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    
    /// <summary>
    /// Filter by specific artists. Null or empty = all artists
    /// </summary>
    public List<Guid>? ArtistIds { get; set; }
    
    /// <summary>
    /// Filter by event statuses. Null or empty = all statuses
    /// </summary>
    public List<EventStatus>? Statuses { get; set; }
    
    /// <summary>
    /// Filter by event types. Null or empty = all types
    /// </summary>
    public List<EventType>? Types { get; set; }
}
