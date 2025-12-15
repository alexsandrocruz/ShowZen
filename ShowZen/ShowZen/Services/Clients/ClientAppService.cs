using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using ShowZen.Entities.Clients;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Clients;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Clients;

[Authorize(ShowZenPermissions.Clients.Default)]
public class ClientAppService : ApplicationService, IClientAppService
{
    private readonly IRepository<Client, Guid> _clientRepository;
    
    public ClientAppService(IRepository<Client, Guid> clientRepository)
    {
        _clientRepository = clientRepository;
    }
    
    public async Task<ClientDto> GetAsync(Guid id)
    {
        var client = await _clientRepository.GetAsync(id);
        return ObjectMapper.Map<Client, ClientDto>(client);
    }
    
    public async Task<PagedResultDto<ClientDto>> GetListAsync(GetClientListDto input)
    {
        var queryable = await _clientRepository.GetQueryableAsync();
        
        // Filtros
        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(c => 
                c.Name.Contains(input.Filter) || 
                (c.Email != null && c.Email.Contains(input.Filter)) ||
                (c.Document != null && c.Document.Contains(input.Filter))
            );
        }
        
        if (input.Type.HasValue)
        {
            queryable = queryable.Where(c => c.Type == input.Type.Value);
        }
        
        if (input.LeadStatus.HasValue)
        {
            queryable = queryable.Where(c => c.LeadStatus == input.LeadStatus.Value);
        }
        
        if (input.IsActive.HasValue)
        {
            queryable = queryable.Where(c => c.IsActive == input.IsActive.Value);
        }
        
        // Paginação
        var totalCount = await AsyncExecuter.CountAsync(queryable);
        var clients = await AsyncExecuter.ToListAsync(
            queryable
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
        );
        
        return new PagedResultDto<ClientDto>(
            totalCount,
            ObjectMapper.Map<System.Collections.Generic.List<Client>, System.Collections.Generic.List<ClientDto>>(clients)
        );
    }
    
    [Authorize(ShowZenPermissions.Clients.Create)]
    public async Task<ClientDto> CreateAsync(CreateUpdateClientDto input)
    {
        var client = ObjectMapper.Map<CreateUpdateClientDto, Client>(input);
        client.IsActive = true;
        client.LeadStatus = LeadStatus.New;
        client.FirstContactDate = Clock.Now;
        
        await _clientRepository.InsertAsync(client);
        return ObjectMapper.Map<Client, ClientDto>(client);
    }
    
    [Authorize(ShowZenPermissions.Clients.Edit)]
    public async Task<ClientDto> UpdateAsync(Guid id, CreateUpdateClientDto input)
    {
        var client = await _clientRepository.GetAsync(id);
        ObjectMapper.Map(input, client);
        client.LastContactDate = Clock.Now;
        
        await _clientRepository.UpdateAsync(client);
        return ObjectMapper.Map<Client, ClientDto>(client);
    }
    
    [Authorize(ShowZenPermissions.Clients.Edit)]
    public async Task<ClientDto> UpdateLeadStatusAsync(Guid id, LeadStatus newStatus)
    {
        var client = await _clientRepository.GetAsync(id);
        client.LeadStatus = newStatus;
        client.LastContactDate = Clock.Now;
        
        await _clientRepository.UpdateAsync(client);
        return ObjectMapper.Map<Client, ClientDto>(client);
    }
    
    [Authorize(ShowZenPermissions.Clients.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _clientRepository.DeleteAsync(id);
    }
}
