using ShowZen.Entities.Artists;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Artists;

public class GetArtistListDto : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public ArtistType? Type { get; set; }
    public bool? IsActive { get; set; }
}
