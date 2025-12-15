using Riok.Mapperly.Abstractions;
using ShowZen.Entities.Events;
using ShowZen.Services.Dtos.Events;

namespace ShowZen.Mapping;

[Mapper]
public partial class LocationMapper
{
    public partial LocationDto ToDto(Location entity);
    public partial Location ToEntity(CreateUpdateLocationDto dto);
    public partial void UpdateEntity(CreateUpdateEventDto dto, Event entity);
}
