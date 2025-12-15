using System;
using System.Threading.Tasks;
using ShowZen.Entities.Clients;
using ShowZen.Services.Dtos.Clients;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Clients;

public interface IClientAppService : IApplicationService
{
    Task<ClientDto> GetAsync(Guid id);
    Task<PagedResultDto<ClientDto>> GetListAsync(GetClientListDto input);
    Task<ClientDto> CreateAsync(CreateUpdateClientDto input);
    Task<ClientDto> UpdateAsync(Guid id, CreateUpdateClientDto input);
    Task DeleteAsync(Guid id);
    Task<ClientDto> UpdateLeadStatusAsync(Guid id, LeadStatus newStatus);
}
