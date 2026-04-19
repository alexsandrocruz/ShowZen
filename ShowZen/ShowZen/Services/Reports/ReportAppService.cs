using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Reports;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Reports;

[Authorize(ShowZenPermissions.Events.Default)]
public class ReportAppService : ApplicationService, IReportAppService
{
    private readonly IRepository<Event, Guid> _eventRepository;
    private readonly MonthlyReportPdfGenerator _pdfGenerator;

    public ReportAppService(
        IRepository<Event, Guid> eventRepository,
        MonthlyReportPdfGenerator pdfGenerator)
    {
        _eventRepository = eventRepository;
        _pdfGenerator = pdfGenerator;
    }

    public async Task<List<MonthlyReportItemDto>> GetMonthlyConfirmedEventsAsync([FromQuery] MonthlyReportInput input)
    {
        // Validate month and year
        if (input.Month < 1 || input.Month > 12)
            throw new UserFriendlyException("Mês inválido. Deve ser entre 1 e 12.");
        if (input.Year < 2000 || input.Year > 2100)
            throw new UserFriendlyException("Ano inválido.");

        var startDate = new DateTime(input.Year, input.Month, 1);
        var endDate = startDate.AddMonths(1).AddDays(-1).AddHours(23).AddMinutes(59).AddSeconds(59);

        var queryable = await _eventRepository.GetQueryableAsync();
        var query = queryable
            .Include(e => e.Client)
            .Include(e => e.Location)
            .Include(e => e.Artist)
            .Where(e => e.Status == EventStatus.Confirmed)
            .Where(e => e.StartDateTime >= startDate && e.StartDateTime <= endDate);

        // Optional artist filter
        if (input.ArtistIds != null && input.ArtistIds.Any())
        {
            query = query.Where(e => input.ArtistIds.Contains(e.ArtistId));
        }

        var events = await query
            .OrderBy(e => e.StartDateTime)
            .ToListAsync();

        return events.Select(MapToDto).ToList();
    }

    public async Task<FileContentResult> GetMonthlyConfirmedEventsPdfAsync([FromQuery] MonthlyReportInput input)
    {
        var events = await GetMonthlyConfirmedEventsAsync(input);

        var monthName = GetMonthNamePtBr(input.Month);
        var pdfBytes = await _pdfGenerator.GenerateAsync(events, input.Month, input.Year, $"{monthName} {input.Year}");

        var fileName = $"Agenda-{monthName}-{input.Year}.pdf";

        return new FileContentResult(pdfBytes, "application/pdf")
        {
            FileDownloadName = fileName
        };
    }

    private static MonthlyReportItemDto MapToDto(Event e)
    {
        // City: prefer Location.City, fallback to Client.City
        var city = !string.IsNullOrWhiteSpace(e.Location?.City)
            ? e.Location.City
            : (e.Client?.City ?? string.Empty);

        var state = !string.IsNullOrWhiteSpace(e.Location?.State)
            ? e.Location.State
            : (e.Client?.State ?? string.Empty);

        return new MonthlyReportItemDto
        {
            Id = e.Id,
            StartDateTime = e.StartDateTime,
            Title = e.Title,
            City = city,
            State = state,
            ContactName = e.Client?.Name ?? string.Empty,
            ContactPhone = e.Client?.Phone,
            ArtistName = e.Artist?.Name ?? string.Empty,
            StartTime = e.StartTime,
            LocationName = e.Location?.Name,
        };
    }

    private static string GetMonthNamePtBr(int month) => month switch
    {
        1 => "Janeiro",
        2 => "Fevereiro",
        3 => "Março",
        4 => "Abril",
        5 => "Maio",
        6 => "Junho",
        7 => "Julho",
        8 => "Agosto",
        9 => "Setembro",
        10 => "Outubro",
        11 => "Novembro",
        12 => "Dezembro",
        _ => throw new UserFriendlyException("Mês inválido.")
    };
}
