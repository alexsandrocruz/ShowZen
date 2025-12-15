using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using ShowZen.Entities.Artists;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Artists;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Artists;

[Authorize(ShowZenPermissions.Artists.Default)]
public class ArtistAppService : ApplicationService, IArtistAppService
{
    private readonly IRepository<Artist, Guid> _artistRepository;
    
    public ArtistAppService(IRepository<Artist, Guid> artistRepository)
    {
        _artistRepository = artistRepository;
    }
    
    public async Task<ArtistDto> GetAsync(Guid id)
    {
        var artist = await _artistRepository.GetAsync(id);
        return ObjectMapper.Map<Artist, ArtistDto>(artist);
    }
    
    public async Task<PagedResultDto<ArtistDto>> GetListAsync(GetArtistListDto input)
    {
        var queryable = await _artistRepository.GetQueryableAsync();
        
        // Filtros
        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(a => 
                a.Name.Contains(input.Filter) || 
                a.Biography.Contains(input.Filter)
            );
        }
        
        if (input.Type.HasValue)
        {
            queryable = queryable.Where(a => a.Type == input.Type.Value);
        }
        
        if (input.IsActive.HasValue)
        {
            queryable = queryable.Where(a => a.IsActive == input.IsActive.Value);
        }
        
        // Paginação
        var totalCount = await AsyncExecuter.CountAsync(queryable);
        var artists = await AsyncExecuter.ToListAsync(
            queryable
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
        );
        
        return new PagedResultDto<ArtistDto>(
            totalCount,
            ObjectMapper.Map<List<Artist>, List<ArtistDto>>(artists)
        );
    }
    
    [Authorize(ShowZenPermissions.Artists.Create)]
    public async Task<ArtistDto> CreateAsync(CreateUpdateArtistDto input)
    {
        var artist = ObjectMapper.Map<CreateUpdateArtistDto, Artist>(input);
        artist.IsActive = true;
        
        await _artistRepository.InsertAsync(artist);
        return ObjectMapper.Map<Artist, ArtistDto>(artist);
    }
    
    [Authorize(ShowZenPermissions.Artists.Edit)]
    public async Task<ArtistDto> UpdateAsync(Guid id, CreateUpdateArtistDto input)
    {
        var artist = await _artistRepository.GetAsync(id);
        ObjectMapper.Map(input, artist);
        
        await _artistRepository.UpdateAsync(artist);
        return ObjectMapper.Map<Artist, ArtistDto>(artist);
    }
    
    [Authorize(ShowZenPermissions.Artists.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _artistRepository.DeleteAsync(id);
    }
}
