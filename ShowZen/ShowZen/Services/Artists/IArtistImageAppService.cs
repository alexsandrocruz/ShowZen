using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;

namespace ShowZen.Services.Artists;

public interface IArtistImageAppService : IApplicationService
{
    Task UploadLogoAsync(Guid artistId, IRemoteStreamContent input);
    Task UploadBannerAsync(Guid artistId, IRemoteStreamContent input);
    Task<IRemoteStreamContent> GetLogoAsync(Guid artistId);
    Task<IRemoteStreamContent> GetBannerAsync(Guid artistId);
}
