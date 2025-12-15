using System;
using System.Threading.Tasks;
using ShowZen.Services.Dtos.Events;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Events;

public interface ILocationAppService : IApplicationService
{
    Task<PagedResultDto<LocationDto>> GetListAsync(GetLocationListDto input);
    Task<LocationDto> GetAsync(Guid id);
    Task<LocationDto> CreateAsync(CreateUpdateLocationDto input);
    Task<LocationDto> UpdateAsync(Guid id, CreateUpdateLocationDto input);
    Task DeleteAsync(Guid id);
}
