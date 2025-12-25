using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShowZen.Entities.Events;
using ShowZen.Services.Dtos.Events;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Events;

public interface IEventAppService : IApplicationService
{
    Task<EventDto> GetAsync(Guid id);
    Task<PagedResultDto<EventDto>> GetListAsync(GetEventListDto input);
    Task<EventDto> CreateAsync(CreateUpdateEventDto input);
    Task<EventDto> UpdateAsync(Guid id, CreateUpdateEventDto input);
    Task UpdateStatusAsync(Guid id, EventStatus status);
    Task DeleteAsync(Guid id);
    Task<PagedResultDto<CalendarEventDto>> GetCalendarEventsAsync(DateTime startDate, DateTime endDate);
    
    Task<ScheduleOverviewDto> QueryScheduleOverviewAsync([FromBody] GetScheduleOverviewInput input);
    
    Task<bool> CheckConflictAsync(CheckConflictInput input);
}
