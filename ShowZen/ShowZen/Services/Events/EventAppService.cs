using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Events;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Events;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Events;

[Authorize(ShowZenPermissions.Events.Default)]
public class EventAppService : ApplicationService, IEventAppService
{
    private readonly IRepository<Event, Guid> _eventRepository;
    private readonly IRepository<Artist, Guid> _artistRepository;
    private readonly IRepository<Location, Guid> _locationRepository;
    private readonly EventConflictDetector _conflictDetector;
    
    public EventAppService(
        IRepository<Event, Guid> eventRepository,
        IRepository<Artist, Guid> artistRepository,
        IRepository<Location, Guid> locationRepository,
        EventConflictDetector conflictDetector)
    {
        _eventRepository = eventRepository;
        _artistRepository = artistRepository;
        _locationRepository = locationRepository;
        _conflictDetector = conflictDetector;
    }
    
    public async Task<EventDto> GetAsync(Guid id)
    {
        var queryable = await _eventRepository.GetQueryableAsync();
        var eventEntity = await queryable
            .Include(e => e.Artist)
            .Include(e => e.Client)
            .Include(e => e.Location)
            .Include(e => e.LocalPartner)
            .Include(e => e.Commissions)
            .FirstOrDefaultAsync(e => e.Id == id);
            
        if (eventEntity == null)
        {
            throw new BusinessException("ShowZen:EventNotFound");
        }
        
        var dto = ObjectMapper.Map<Event, EventDto>(eventEntity);
        dto.ArtistName = eventEntity.Artist.Name;
        dto.ClientName = eventEntity.Client.Name;
        dto.LocationName = eventEntity.Location?.Name;
        dto.LocalPartnerName = eventEntity.LocalPartner?.Name;
        
        return dto;
    }
    
    public async Task<PagedResultDto<EventDto>> GetListAsync(GetEventListDto input)
    {
        var queryable = await _eventRepository.GetQueryableAsync();
        queryable = queryable
            .Include(e => e.Artist)
            .Include(e => e.Client)
            .Include(e => e.Location)
            .Include(e => e.LocalPartner);
        
        // Filtros
        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(e => 
                e.Title.Contains(input.Filter) ||
                (e.Description != null && e.Description.Contains(input.Filter))
            );
        }
        
        if (input.Type.HasValue)
        {
            queryable = queryable.Where(e => e.Type == input.Type.Value);
        }
        
        if (input.Status.HasValue)
        {
            queryable = queryable.Where(e => e.Status == input.Status.Value);
        }
        
        if (input.ArtistId.HasValue)
        {
            queryable = queryable.Where(e => e.ArtistId == input.ArtistId.Value);
        }
        
        if (input.ClientId.HasValue)
        {
            queryable = queryable.Where(e => e.ClientId == input.ClientId.Value);
        }
        
        if (input.StartDate.HasValue)
        {
            queryable = queryable.Where(e => e.StartDateTime >= input.StartDate.Value);
        }
        
        if (input.EndDate.HasValue)
        {
            queryable = queryable.Where(e => e.StartDateTime <= input.EndDate.Value);
        }
        
        // Paginação
        var totalCount = await AsyncExecuter.CountAsync(queryable);
        var events = await AsyncExecuter.ToListAsync(
            queryable
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "StartDateTime DESC" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
        );
        
        var eventDtos = events.Select(e =>
        {
            var dto = ObjectMapper.Map<Event, EventDto>(e);
            dto.ArtistName = e.Artist.Name;
            dto.ClientName = e.Client.Name;
            dto.LocationName = e.Location?.Name;
            dto.LocalPartnerName = e.LocalPartner?.Name;
            return dto;
        }).ToList();
        
        return new PagedResultDto<EventDto>(totalCount, eventDtos);
    }
    
    [Authorize(ShowZenPermissions.Events.Create)]
    public async Task<EventDto> CreateAsync(CreateUpdateEventDto input)
    {
        // Verificar conflito de agenda (non-blocking)
        var hasConflict = await _conflictDetector.HasConflictAsync(
            input.ArtistId,
            input.StartDateTime,
            input.EndDateTime
        );
        
        var eventEntity = ObjectMapper.Map<CreateUpdateEventDto, Event>(input);
        eventEntity.Status = EventStatus.Lead;
        eventEntity.HasConflict = hasConflict; // Mark conflict but don't block
        
        // Store suggested alternative if there's a conflict
        if (hasConflict)
        {
            var requestedArtist = await _artistRepository.GetAsync(input.ArtistId);
            var alternative = await _conflictDetector.SuggestAlternativeArtistAsync(
                input.ArtistId,
                requestedArtist.Type,
                input.StartDateTime,
                input.EndDateTime
            );
            
            eventEntity.SuggestedAlternativeArtistId = alternative?.Id;
        }
        
        // Handle Commissions
        if (input.Commissions != null)
        {
            foreach (var commInput in input.Commissions)
            {
                var commission = ObjectMapper.Map<CreateUpdateEventCommissionDto, EventCommission>(commInput);
                eventEntity.Commissions.Add(commission);
            }
        }
        
        await _eventRepository.InsertAsync(eventEntity, autoSave: true);
        
        return await GetAsync(eventEntity.Id);
    }
    
    [Authorize(ShowZenPermissions.Events.Edit)]
    public async Task<EventDto> UpdateAsync(Guid id, CreateUpdateEventDto input)
    {
        var eventEntity = await _eventRepository.GetAsync(id);
        
        // Verificar conflito (excluindo o evento atual) - non-blocking
        var hasConflict = await _conflictDetector.HasConflictAsync(
            input.ArtistId,
            input.StartDateTime,
            input.EndDateTime,
            id
        );
        
        ObjectMapper.Map(input, eventEntity);
        
        // Apply status if provided (ObjectMapper ignores nullable fields that are null)
        if (input.Status.HasValue)
        {
            eventEntity.Status = input.Status.Value;
        }
        
        eventEntity.HasConflict = hasConflict; // Mark conflict but don't block
        
        // Store suggested alternative if there's a conflict
        if (hasConflict)
        {
            var requestedArtist = await _artistRepository.GetAsync(input.ArtistId);
            var alternative = await _conflictDetector.SuggestAlternativeArtistAsync(
                input.ArtistId,
                requestedArtist.Type,
                input.StartDateTime,
                input.EndDateTime
            );
            
            eventEntity.SuggestedAlternativeArtistId = alternative?.Id;
        }
        else
        {
            eventEntity.SuggestedAlternativeArtistId = null;
        }
        
        // Handle Commissions
        if (input.Commissions != null)
        {
            // Clear and re-add for simplicity (requires including Commissions in Get)
            eventEntity.Commissions.Clear();
            foreach (var commInput in input.Commissions)
            {
                var commission = ObjectMapper.Map<CreateUpdateEventCommissionDto, EventCommission>(commInput);
                eventEntity.Commissions.Add(commission);
            }
        }
        
        await _eventRepository.UpdateAsync(eventEntity);
        
        return await GetAsync(id);
    }
    
    [Authorize(ShowZenPermissions.Events.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _eventRepository.DeleteAsync(id);
    }
    
    [Authorize(ShowZenPermissions.Events.Edit)]
    public async Task UpdateStatusAsync(Guid id, EventStatus status)
    {
        var evt = await _eventRepository.GetAsync(id);
        evt.Status = status;
        await _eventRepository.UpdateAsync(evt);
    }
    
    [HttpPost]
    public async Task<bool> CheckConflictAsync([FromBody] CheckConflictInput input)
    {
        return await _conflictDetector.HasConflictAsync(
            input.ArtistId,
            input.StartDateTime,
            input.EndDateTime,
            input.ExcludeEventId
        );
    }

    public async Task<PagedResultDto<CalendarEventDto>> GetCalendarEventsAsync(DateTime startDate, DateTime endDate)
    {
        var queryable = await _eventRepository.GetQueryableAsync();
        var events = await AsyncExecuter.ToListAsync(
            queryable
                .Include(e => e.Artist)
                .Include(e => e.Client)
                .Include(e => e.Location)
                .Where(e => e.StartDateTime >= startDate && e.StartDateTime <= endDate)
                .OrderBy(e => e.StartDateTime)
        );
        
        var calendarEvents = events.Select(e => new CalendarEventDto
        {
            Id = e.Id,
            Title = e.Title,
            Start = e.StartDateTime,
            End = e.EndDateTime,
            Status = e.Status,
            ArtistName = e.Artist.Name,
            ClientName = e.Client.Name,
            LocationName = e.Location?.Name,
            HasConflict = e.HasConflict
        }).ToList();
        
        return new PagedResultDto<CalendarEventDto>(calendarEvents.Count, calendarEvents);
    }
    
    [IgnoreAntiforgeryToken]
    public async Task<ScheduleOverviewDto> QueryScheduleOverviewAsync([FromBody] GetScheduleOverviewInput input)
    {
        var queryable = await _eventRepository.GetQueryableAsync();
        queryable = queryable
            .Include(e => e.Artist)
            .Include(e => e.Client)
            .Include(e => e.Location);
        
        // Apply date range filter
        queryable = queryable.Where(e => 
            e.StartDateTime >= input.StartDate && 
            e.StartDateTime <= input.EndDate
        );
        
        // Apply artist filter
        if (input.ArtistIds != null && input.ArtistIds.Any())
        {
            queryable = queryable.Where(e => input.ArtistIds.Contains(e.ArtistId));
        }
        
        // Apply status filter
        if (input.Statuses != null && input.Statuses.Any())
        {
            queryable = queryable.Where(e => input.Statuses.Contains(e.Status));
        }
        
        // Apply type filter
        if (input.Types != null && input.Types.Any())
        {
            queryable = queryable.Where(e => input.Types.Contains(e.Type));
        }
        
        // Order by start date
        queryable = queryable.OrderBy(e => e.StartDateTime);
        
        // Get all events (no pagination for calendar view)
        var events = await AsyncExecuter.ToListAsync(queryable);
        
        // Recalculate conflicts for all events (runtime check)
        foreach (var eventEntity in events)
        {
            var hasConflict = await _conflictDetector.HasConflictAsync(
                eventEntity.ArtistId,
                eventEntity.StartDateTime,
                eventEntity.EndDateTime ?? eventEntity.StartDateTime.AddHours(2),
                eventEntity.Id // Exclude this event from conflict check
            );
            
            // Update in-memory flag (but don't save to DB to avoid overhead)
            eventEntity.HasConflict = hasConflict;
        }

        // Map to summary DTOs
        var eventSummaries = events.Select(e => new EventSummaryDto
        {
            Id = e.Id,
            Title = e.Title,
            StartDateTime = e.StartDateTime,
            EndDateTime = e.EndDateTime,
            ArtistId = e.ArtistId,
            ArtistName = e.Artist.Name,
            ArtistHexColor = e.Artist.HexColor,
            ClientId = e.ClientId,
            ClientName = e.Client.Name,
            LocationId = e.LocationId,
            LocationName = e.Location?.Name,
            Status = e.Status,
            Type = e.Type,
            Fee = e.Fee,
            HasConflict = e.HasConflict,
            ExpectedAudience = e.ExpectedAudience,
            Duration = e.Duration,
            StartTime = e.StartTime
        }).ToList();
        
        // Calculate daily availability
        var dailyAvailability = CalculateDailyAvailability(events, input.StartDate, input.EndDate);
        
        // Calculate statistics
        var statistics = new ScheduleStatisticsDto
        {
            ConfirmedEvents = events.Count(e => e.Status == EventStatus.Confirmed),
            ProposalEvents = events.Count(e => e.Status == EventStatus.ProposalSent),
            LeadEvents = events.Count(e => e.Status == EventStatus.Lead),
            TotalConfirmedRevenue = events
                .Where(e => e.Status == EventStatus.Confirmed && e.Fee.HasValue)
                .Sum(e => e.Fee!.Value),
            TotalProposalRevenue = events
                .Where(e => e.Status == EventStatus.ProposalSent && e.Fee.HasValue)
                .Sum(e => e.Fee!.Value)
        };
        
        return new ScheduleOverviewDto
        {
            Events = eventSummaries,
            DailyAvailability = dailyAvailability,
            TotalCount = events.Count,
            ConflictsCount = events.Count(e => e.HasConflict),
            Statistics = statistics
        };
    }
    
    private Dictionary<DateTime, AvailabilityStatus> CalculateDailyAvailability(
        List<Event> events,
        DateTime startDate,
        DateTime endDate)
    {
        var availability = new Dictionary<DateTime, AvailabilityStatus>();
        
        // Initialize all days in range as Free
        for (var date = startDate.Date; date <= endDate.Date; date = date.AddDays(1))
        {
            availability[date] = AvailabilityStatus.Free;
        }
        
        // Group events by date and count
        var eventsByDate = events
            .GroupBy(e => e.StartDateTime.Date)
            .ToDictionary(g => g.Key, g => g.Count());
        
        // Update availability based on event count
        foreach (var kvp in eventsByDate)
        {
            var eventCount = kvp.Value;
            availability[kvp.Key] = eventCount switch
            {
                0 => AvailabilityStatus.Free,
                1 or 2 => AvailabilityStatus.Partial,
                _ => AvailabilityStatus.Busy
            };
        }
        
        return availability;
    }
}
