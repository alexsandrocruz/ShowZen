using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShowZen.Services.Dtos.Reports;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Reports;

public interface IReportAppService : IApplicationService
{
    Task<List<MonthlyReportItemDto>> GetMonthlyConfirmedEventsAsync(MonthlyReportInput input);
    Task<FileContentResult> GetMonthlyConfirmedEventsPdfAsync(MonthlyReportInput input);
}
