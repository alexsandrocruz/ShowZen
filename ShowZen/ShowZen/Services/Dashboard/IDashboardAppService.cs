using System.Threading.Tasks;
using ShowZen.Services.Dtos.Dashboard;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Dashboard;

public interface IDashboardAppService : IApplicationService
{
    Task<DashboardStatsDto> GetStatsAsync(GetDashboardStatsInput input);
}
