using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShowZen.Entities.Events;
using ShowZen.Services.Dtos.Dashboard;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Dashboard;

public class DashboardAppService : ApplicationService, IDashboardAppService
{
    private readonly IRepository<Event, Guid> _eventRepository;

    public DashboardAppService(IRepository<Event, Guid> eventRepository)
    {
        _eventRepository = eventRepository;
    }

    public async Task<DashboardStatsDto> GetStatsAsync(GetDashboardStatsInput input)
    {
        var now = DateTime.Now;
        var startDate = input.StartDate ?? new DateTime(now.Year, now.Month, 1);
        var endDate = input.EndDate ?? startDate.AddMonths(1).AddDays(-1);

        var queryable = await _eventRepository.GetQueryableAsync();
        
        // Include related entities
        queryable = queryable
            .Include(e => e.Artist)
            .Include(e => e.Client);

        // Get events for the period
        var events = await AsyncExecuter.ToListAsync(
            queryable.Where(e => e.StartDateTime >= startDate && e.StartDateTime <= endDate)
        );

        // Calculate KPIs
        var totalEvents = events.Count;
        var confirmedEvents = events.Count(e => e.Status == EventStatus.Confirmed);
        var expectedRevenue = events
            .Where(e => e.Status == EventStatus.Confirmed)
            .Sum(e => e.Fee ?? 0);
        var openLeads = events.Count(e => 
            e.Status == EventStatus.Lead || 
            e.Status == EventStatus.ProposalSent);

        // Events by status
        var eventsByStatus = events
            .GroupBy(e => e.Status)
            .Select(g => new EventsByStatusDto
            {
                Status = GetStatusName(g.Key),
                Count = g.Count(),
                Color = GetStatusColor(g.Key)
            })
            .OrderBy(e => GetStatusOrder(e.Status))
            .ToList();

        // Upcoming events
        var upcomingEvents = await AsyncExecuter.ToListAsync(
            queryable
                .Where(e => e.StartDateTime >= now && e.Status != EventStatus.Cancelled && e.Status != EventStatus.Lost)
                .OrderBy(e => e.StartDateTime)
                .Take(5)
        );

        var upcomingEventDtos = upcomingEvents.Select(e => new UpcomingEventDto
        {
            Id = e.Id,
            Title = e.Title,
            Date = e.StartDateTime,
            ArtistName = e.Artist?.Name ?? "N/A",
            ClientName = e.Client?.Name ?? "N/A",
            Fee = e.Fee,
            Status = GetStatusName(e.Status),
            StatusColor = GetStatusColor(e.Status)
        }).ToList();

        // Revenue by month (last 6 months)
        var revenueByMonth = await GetRevenueByMonthAsync(6);

        return new DashboardStatsDto
        {
            TotalEvents = totalEvents,
            ConfirmedEvents = confirmedEvents,
            ExpectedRevenue = expectedRevenue,
            OpenLeads = openLeads,
            EventsByStatus = eventsByStatus,
            UpcomingEvents = upcomingEventDtos,
            RevenueByMonth = revenueByMonth
        };
    }

    private async Task<List<RevenueByMonthDto>> GetRevenueByMonthAsync(int months)
    {
        var result = new List<RevenueByMonthDto>();
        var now = DateTime.Now;
        var queryable = await _eventRepository.GetQueryableAsync();

        for (int i = months - 1; i >= 0; i--)
        {
            var monthDate = now.AddMonths(-i);
            var monthStart = new DateTime(monthDate.Year, monthDate.Month, 1);
            var monthEnd = monthStart.AddMonths(1).AddDays(-1);

            var monthlyRevenue = await AsyncExecuter.SumAsync(
                queryable
                    .Where(e => e.StartDateTime >= monthStart && 
                                e.StartDateTime <= monthEnd && 
                                e.Status == EventStatus.Confirmed)
                    .Select(e => e.Fee ?? 0)
            );

            result.Add(new RevenueByMonthDto
            {
                Month = monthDate.ToString("MMM", new CultureInfo("pt-BR")),
                Amount = monthlyRevenue
            });
        }

        return result;
    }

    private static string GetStatusName(EventStatus status) => status switch
    {
        EventStatus.Lead => "Lead",
        EventStatus.ProposalSent => "Proposta",
        EventStatus.Confirmed => "Confirmado",
        EventStatus.InProgress => "Em Andamento",
        EventStatus.Completed => "Concluído",
        EventStatus.Cancelled => "Cancelado",
        EventStatus.Lost => "Perdido",
        _ => status.ToString()
    };

    private static string GetStatusColor(EventStatus status) => status switch
    {
        EventStatus.Lead => "#6c757d",
        EventStatus.ProposalSent => "#ffc107",
        EventStatus.Confirmed => "#28a745",
        EventStatus.InProgress => "#007bff",
        EventStatus.Completed => "#17a2b8",
        EventStatus.Cancelled => "#dc3545",
        EventStatus.Lost => "#dc3545",
        _ => "#6c757d"
    };

    private static int GetStatusOrder(string status) => status switch
    {
        "Lead" => 1,
        "Proposta" => 2,
        "Confirmado" => 3,
        "Em Andamento" => 4,
        "Concluído" => 5,
        "Cancelado" => 6,
        "Perdido" => 7,
        _ => 99
    };
}
