using Microsoft.AspNetCore.Http;
using Volo.Abp.Content;

namespace ShowZen.Services.Dtos.Artists;

public class UploadImageDto
{
    public IRemoteStreamContent File { get; set; } = default!;
}
