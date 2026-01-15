using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShowZen.Entities.Artists;
using ShowZen.Permissions;
using ShowZen.Services.Dtos.Artists;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp;
using Volo.Abp.BlobStoring;
using Volo.Abp.Content;

namespace ShowZen.Services.Artists;

[Authorize(ShowZenPermissions.Artists.Default)]
public class ArtistAppService : ApplicationService, IArtistAppService
{
    private readonly IRepository<Artist, Guid> _artistRepository;
    private readonly IBlobContainer _blobContainer;
    
    public ArtistAppService(
        IRepository<Artist, Guid> artistRepository,
        IBlobContainer blobContainer)
    {
        _artistRepository = artistRepository;
        _blobContainer = blobContainer;
    }
    
    public async Task<ArtistDto> GetAsync(Guid id)
    {
        var artist = await _artistRepository.GetAsync(id);
        var dto = ObjectMapper.Map<Artist, ArtistDto>(artist);
        
        if (!string.IsNullOrEmpty(dto.LogoUrl)) dto.LogoUrl = $"/api/app/artist-image/{dto.Id}/logo";
        if (!string.IsNullOrEmpty(dto.BannerUrl)) dto.BannerUrl = $"/api/app/artist-image/{dto.Id}/banner";
        
        return dto;
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
        
        var dtos = ObjectMapper.Map<List<Artist>, List<ArtistDto>>(artists);
        foreach (var dto in dtos)
        {
            if (!string.IsNullOrEmpty(dto.LogoUrl)) dto.LogoUrl = $"/api/app/artist-image/{dto.Id}/logo";
            if (!string.IsNullOrEmpty(dto.BannerUrl)) dto.BannerUrl = $"/api/app/artist-image/{dto.Id}/banner";
        }
        
        return new PagedResultDto<ArtistDto>(totalCount, dtos);
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

    [HttpPost]
    [Route("api/app/artist/{artistId}/proposal-template")]
    [IgnoreAntiforgeryToken]
    [Authorize(ShowZenPermissions.Artists.Edit)]
    public async Task<string> UploadProposalTemplateAsync(Guid artistId, IRemoteStreamContent input)
    {
        if (input == null || input.ContentLength == 0)
        {
            throw new Exception("No file provided");
        }

        // Validate PDF
        if (!input.FileName.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
        {
            throw new Exception("Only PDF files are allowed");
        }

        var artist = await _artistRepository.GetAsync(artistId);

        // Delete old template if exists
        if (!string.IsNullOrEmpty(artist.ProposalTemplateUrl))
        {
            await _blobContainer.DeleteAsync(artist.ProposalTemplateUrl);
        }

        // Save new template
        var blobName = $"artist-templates/{artistId}/{Guid.NewGuid()}.pdf";
        
        await _blobContainer.SaveAsync(blobName, input.GetStream(), overrideExisting: true);

        // Update artist
        artist.ProposalTemplateUrl = blobName;
        await _artistRepository.UpdateAsync(artist);

        return blobName;
    }

    [HttpDelete]
    [Route("api/app/artist/{artistId}/proposal-template")]
    [Authorize(ShowZenPermissions.Artists.Edit)]
    public async Task DeleteProposalTemplateAsync(Guid artistId)
    {
        var artist = await _artistRepository.GetAsync(artistId);

        if (!string.IsNullOrEmpty(artist.ProposalTemplateUrl))
        {
            await _blobContainer.DeleteAsync(artist.ProposalTemplateUrl);
            artist.ProposalTemplateUrl = null;
            await _artistRepository.UpdateAsync(artist);
        }
    }

    [HttpGet]
    [Route("api/app/artist/{artistId}/proposal-template")]
    public async Task<IRemoteStreamContent> GetProposalTemplateAsync(Guid artistId)
    {
        var artist = await _artistRepository.GetAsync(artistId);

        if (string.IsNullOrEmpty(artist.ProposalTemplateUrl))
        {
            throw new UserFriendlyException("Sem template para este artista.");
        }

        var exists = await _blobContainer.ExistsAsync(artist.ProposalTemplateUrl);
        if (!exists)
        {
            throw new UserFriendlyException("Arquivo não encontrado.");
        }

        var stream = await _blobContainer.GetAsync(artist.ProposalTemplateUrl);
        return new RemoteStreamContent(stream, artist.ProposalTemplateUrl, "application/pdf");
    }
}
