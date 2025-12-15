using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using ShowZen.Entities.Events;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Events;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Events;

[Authorize(ShowZenPermissions.Events.Default)]
public class LocationAppService : ApplicationService, ILocationAppService
{
    private readonly IRepository<Location, Guid> _locationRepository;
    
    public LocationAppService(IRepository<Location, Guid> locationRepository)
    {
        _locationRepository = locationRepository;
    }
    
    public async Task<PagedResultDto<LocationDto>> GetListAsync(GetLocationListDto input)
    {
        var queryable = await _locationRepository.GetQueryableAsync();
        
        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(l => 
                l.Name.Contains(input.Filter) ||
                l.City.Contains(input.Filter) ||
                l.Address.Contains(input.Filter)
            );
        }
        
        var totalCount = await AsyncExecuter.CountAsync(queryable);
        
        var locations = await AsyncExecuter.ToListAsync(
            queryable
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
        );
        
        return new PagedResultDto<LocationDto>(
            totalCount,
            ObjectMapper.Map<List<Location>, List<LocationDto>>(locations)
        );
    }
    
    public async Task<LocationDto> GetAsync(Guid id)
    {
        var location = await _locationRepository.GetAsync(id);
        return ObjectMapper.Map<Location, LocationDto>(location);
    }
    
    [Authorize(ShowZenPermissions.Events.Create)]
    public async Task<LocationDto> CreateAsync(CreateUpdateLocationDto input)
    {
        var location = ObjectMapper.Map<CreateUpdateLocationDto, Location>(input);
        await _locationRepository.InsertAsync(location, autoSave: true);
        return ObjectMapper.Map<Location, LocationDto>(location);
    }
    
    [Authorize(ShowZenPermissions.Events.Edit)]
    public async Task<LocationDto> UpdateAsync(Guid id, CreateUpdateLocationDto input)
    {
        var location = await _locationRepository.GetAsync(id);
        ObjectMapper.Map(input, location);
        await _locationRepository.UpdateAsync(location);
        return ObjectMapper.Map<Location, LocationDto>(location);
    }
    
    [Authorize(ShowZenPermissions.Events.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _locationRepository.DeleteAsync(id);
    }
}
