using System;
using System.Threading.Tasks;
using Volo.Abp.Content;
using ShowZen.Services.Dtos.Artists;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ShowZen.Services.Artists;

public interface IArtistAppService : IApplicationService
{
    Task<ArtistDto> GetAsync(Guid id);
    Task<PagedResultDto<ArtistDto>> GetListAsync(GetArtistListDto input);
    Task<ArtistDto> CreateAsync(CreateUpdateArtistDto input);
    Task<ArtistDto> UpdateAsync(Guid id, CreateUpdateArtistDto input);
    Task DeleteAsync(Guid id);
    Task<string> UploadProposalTemplateAsync(Guid artistId, IRemoteStreamContent input);
    Task DeleteProposalTemplateAsync(Guid artistId);
    Task<IRemoteStreamContent> GetProposalTemplateAsync(Guid artistId);
}
