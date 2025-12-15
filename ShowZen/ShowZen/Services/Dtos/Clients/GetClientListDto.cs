using ShowZen.Entities.Clients;
using Volo.Abp.Application.Dtos;

namespace ShowZen.Services.Dtos.Clients;

public class GetClientListDto : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public ClientType? Type { get; set; }
    public LeadStatus? LeadStatus { get; set; }
    public bool? IsActive { get; set; }
}
