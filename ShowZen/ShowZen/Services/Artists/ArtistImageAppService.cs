using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShowZen.Blobs;
using ShowZen.Entities.Artists;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Content;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Artists;

public class ArtistImageAppService : ApplicationService, IArtistImageAppService
{
    private readonly IBlobContainer<ArtistImageContainer> _blobContainer;
    private readonly IRepository<Artist, Guid> _artistRepository;

    public ArtistImageAppService(
        IBlobContainer<ArtistImageContainer> blobContainer,
        IRepository<Artist, Guid> artistRepository)
    {
        _blobContainer = blobContainer;
        _artistRepository = artistRepository;
    }

    [HttpPost]
    [Route("api/app/artist-image/{artistId}/logo")]
    public async Task UploadLogoAsync(Guid artistId, IRemoteStreamContent input)
    {
        var artist = await _artistRepository.GetAsync(artistId);
        var blobName = $"logo_{artistId}_{input.FileName}";
        
        await _blobContainer.SaveAsync(blobName, input.GetStream(), overrideExisting: true);
        
        artist.LogoUrl = blobName;
        await _artistRepository.UpdateAsync(artist);
    }

    [HttpPost]
    [Route("api/app/artist-image/{artistId}/banner")]
    public async Task UploadBannerAsync(Guid artistId, IRemoteStreamContent input)
    {
        var artist = await _artistRepository.GetAsync(artistId);
        var blobName = $"banner_{artistId}_{input.FileName}";
        
        await _blobContainer.SaveAsync(blobName, input.GetStream(), overrideExisting: true);
        
        artist.BannerUrl = blobName;
        await _artistRepository.UpdateAsync(artist);
    }

    [HttpGet]
    [Route("api/app/artist-image/{artistId}/logo")]
    public async Task<IRemoteStreamContent> GetLogoAsync(Guid artistId)
    {
        var artist = await _artistRepository.GetAsync(artistId);
        if (string.IsNullOrEmpty(artist.LogoUrl))
        {
            throw new UserFriendlyException("Sem logo para este artista.");
        }

        var stream = await _blobContainer.GetAsync(artist.LogoUrl);
        return new RemoteStreamContent(stream, artist.LogoUrl);
    }

    [HttpGet]
    [Route("api/app/artist-image/{artistId}/banner")]
    public async Task<IRemoteStreamContent> GetBannerAsync(Guid artistId)
    {
        var artist = await _artistRepository.GetAsync(artistId);
        if (string.IsNullOrEmpty(artist.BannerUrl))
        {
            throw new UserFriendlyException("Sem banner para este artista.");
        }

        var stream = await _blobContainer.GetAsync(artist.BannerUrl);
        return new RemoteStreamContent(stream, artist.BannerUrl);
    }
}
