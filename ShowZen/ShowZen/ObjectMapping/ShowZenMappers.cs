using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using ShowZen.Entities.Books;
using ShowZen.Services.Dtos.Books;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using ShowZen.Services.Dtos.Artists;
using ShowZen.Services.Dtos.Clients;
using ShowZen.Services.Dtos.Events;

namespace ShowZen.ObjectMapping;

// Books Mappers (Example)
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenBookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

//===========================================
// ShowZen Mappers
//===========================================

// Artists
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenArtistToArtistDtoMapper : MapperBase<Artist, ArtistDto>
{
    public override partial ArtistDto Map(Artist source);
    public override partial void Map(Artist source, ArtistDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateArtistDtoToArtistMapper : MapperBase<CreateUpdateArtistDto, Artist>
{
    public override partial Artist Map(CreateUpdateArtistDto source);
    public override partial void Map(CreateUpdateArtistDto source, Artist destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenArtistSpecialtyToArtistSpecialtyDtoMapper : MapperBase<ArtistSpecialty, ArtistSpecialtyDto>
{
    public override partial ArtistSpecialtyDto Map(ArtistSpecialty source);
    public override partial void Map(ArtistSpecialty source, ArtistSpecialtyDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenAvailabilityToAvailabilityDtoMapper : MapperBase<Availability, AvailabilityDto>
{
    public override partial AvailabilityDto Map(Availability source);
    public override partial void Map(Availability source, AvailabilityDto destination);
}

// Clients
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenClientToClientDtoMapper : MapperBase<Client, ClientDto>
{
    public override partial ClientDto Map(Client source);
    public override partial void Map(Client source, ClientDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateClientDtoToClientMapper : MapperBase<CreateUpdateClientDto, Client>
{
    public override partial Client Map(CreateUpdateClientDto source);
    public override partial void Map(CreateUpdateClientDto source, Client destination);
}

// Events
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenEventToEventDtoMapper : MapperBase<Event, EventDto>
{
    public override partial EventDto Map(Event source);
    public override partial void Map(Event source, EventDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateEventDtoToEventMapper : MapperBase<CreateUpdateEventDto, Event>
{
    public override partial Event Map(CreateUpdateEventDto source);
    public override partial void Map(CreateUpdateEventDto source, Event destination);
}

// Locations
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenLocationToLocationDtoMapper : MapperBase<Location, LocationDto>
{
    public override partial LocationDto Map(Location source);
    public override partial void Map(Location source, LocationDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateLocationDtoToLocationMapper : MapperBase<CreateUpdateLocationDto, Location>
{
    public override partial Location Map(CreateUpdateLocationDto source);
    public override partial void Map(CreateUpdateLocationDto source, Location destination);
}

// Event Commissions
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenEventCommissionToEventCommissionDtoMapper : MapperBase<EventCommission, EventCommissionDto>
{
    public override partial EventCommissionDto Map(EventCommission source);
    public override partial void Map(EventCommission source, EventCommissionDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ShowZenCreateUpdateEventCommissionDtoToEventCommissionMapper : MapperBase<CreateUpdateEventCommissionDto, EventCommission>
{
    public override partial EventCommission Map(CreateUpdateEventCommissionDto source);
    public override partial void Map(CreateUpdateEventCommissionDto source, EventCommission destination);
}
