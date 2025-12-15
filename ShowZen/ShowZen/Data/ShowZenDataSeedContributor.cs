using System;
using System.Threading.Tasks;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Data;

public class ShowZenDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Artist, Guid> _artistRepository;
    private readonly IRepository<Client, Guid> _clientRepository;
    private readonly IRepository<Location, Guid> _locationRepository;
    private readonly IRepository<Event, Guid> _eventRepository;

    public ShowZenDataSeedContributor(
        IRepository<Artist, Guid> artistRepository,
        IRepository<Client, Guid> clientRepository,
        IRepository<Location, Guid> locationRepository,
        IRepository<Event, Guid> eventRepository)
    {
        _artistRepository = artistRepository;
        _clientRepository = clientRepository;
        _locationRepository = locationRepository;
        _eventRepository = eventRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        // Verificar se já existe dados para não duplicar
        if (await _artistRepository.GetCountAsync() > 0)
        {
            return;
        }

        // Seed Artists
        var artist1 = new Artist
        {
            Name = "João Silva",
            Type = ArtistType.Musician,
            Biography = "Cantor sertanejo com 10 anos de carreira. Especializado em festas de rodeio e eventos corporativos.",
            IsActive = true,
            InstagramHandle = "@joaosilva",
            WebsiteUrl = "https://joaosilva.com.br"
        };

        var artist2 = new Artist
        {
            Name = "Maria Santos",
            Type = ArtistType.Speaker,
            Biography = "Palestrante motivacional focada em liderança e empreendedorismo. Mais de 500 eventos realizados.",
            IsActive = true,
            InstagramHandle = "@mariasantos",
            WebsiteUrl = "https://mariasantos.com.br"
        };

        var artist3 = new Artist
        {
            Name = "Carlos Mendes",
            Type = ArtistType.Musician,
            Biography = "Banda de forró pé de serra. Repertório tradicional e contemporâneo.",
            IsActive = true,
            InstagramHandle = "@carlosforró"
        };

        await _artistRepository.InsertAsync(artist1, autoSave: true);
        await _artistRepository.InsertAsync(artist2, autoSave: true);
        await _artistRepository.InsertAsync(artist3, autoSave: true);

        // Seed Clients
        var client1 = new Client
        {
            Name = "Prefeitura de São Paulo",
            Type = ClientType.Municipality,
            Document = "12.345.678/0001-90",
            Email = "eventos@prefsp.gov.br",
            Phone = "(11) 3333-4444",
            City = "São Paulo",
            State = "SP",
            IsActive = true,
            LeadStatus = LeadStatus.Won,
            FirstContactDate = DateTime.Now.AddMonths(-3)
        };

        var client2 = new Client
        {
            Name = "SEBRAE Nacional",
            Type = ClientType.Sebrae,
            Document = "00.123.456/0001-78",
            Email = "contato@sebrae.com.br",
            Phone = "(61) 3348-7100",
            City = "Brasília",
            State = "DF",
            IsActive = true,
            LeadStatus = LeadStatus.Negotiation,
            FirstContactDate = DateTime.Now.AddDays(-15)
        };

        var client3 = new Client
        {
            Name = "Igreja Assembleia de Deus",
            Type = ClientType.Church,
            Email = "eventos@assembleia.org.br",
            Phone = "(85) 3456-7890",
            City = "Fortaleza",
            State = "CE",
            IsActive = true,
            LeadStatus = LeadStatus.ProposalSent,
            FirstContactDate = DateTime.Now.AddDays(-7)
        };

        await _clientRepository.InsertAsync(client1, autoSave: true);
        await _clientRepository.InsertAsync(client2, autoSave: true);
        await _clientRepository.InsertAsync(client3, autoSave: true);

        // Seed Locations
        var location1 = new Location
        {
            Name = "Centro de Convenções Anhembi",
            Address = "Av. Olavo Fontoura, 1209",
            City = "São Paulo",
            State = "SP",
            ZipCode = "02012-021",
            Capacity = "3000",
            Notes = "Estacionamento disponível. Ar condicionado central."
        };

        var location2 = new Location
        {
            Name = "Teatro Municipal",
            Address = "Praça Ramos de Azevedo",
            City = "São Paulo",
            State = "SP",
            ZipCode = "01037-010",
            Capacity = "1500",
            Notes = "Excelente acústica. Palco italiano."
        };

        var location3 = new Location
        {
            Name = "Arena Castelão",
            Address = "Av. Alberto Craveiro, 2901",
            City = "Fortaleza",
            State = "CE",
            ZipCode = "60861-212",
            Capacity = "10000"
        };

        await _locationRepository.InsertAsync(location1, autoSave: true);
        await _locationRepository.InsertAsync(location2, autoSave: true);
        await _locationRepository.InsertAsync(location3, autoSave: true);

        // Seed Events
        var event1 = new Event
        {
            Title = "Festival de Verão 2025",
            Type = EventType.Show,
            Status = EventStatus.Confirmed,
            StartDateTime = DateTime.Now.AddDays(30),
            EndDateTime = DateTime.Now.AddDays(30).AddHours(4),
            ArtistId = artist1.Id,
            ClientId = client1.Id,
            LocationId = location1.Id,
            Description = "Grande festival de música sertaneja com food trucks e área kids.",
            ExpectedAudience = 2500,
            Fee = 15000.00m,
            HasConflict = false
        };

        var event2 = new Event
        {
            Title = "Palestra: Empreendedorismo no Brasil",
            Type = EventType.Lecture,
            Status = EventStatus.ProposalSent,
            StartDateTime = DateTime.Now.AddDays(45),
            EndDateTime = DateTime.Now.AddDays(45).AddHours(2),
            ArtistId = artist2.Id,
            ClientId = client2.Id,
            LocationId = location2.Id,
            Description = "Palestra focada em pequenos empresários e MEIs.",
            ExpectedAudience = 500,
            Fee = 8000.00m,
            HasConflict = false
        };

        var event3 = new Event
        {
            Title = "Festa Junina Beneficente",
            Type = EventType.InstitutionalEvent,
            Status = EventStatus.Lead,
            StartDateTime = DateTime.Now.AddDays(60),
            EndDateTime = DateTime.Now.AddDays(60).AddHours(6),
            ArtistId = artist3.Id,
            ClientId = client3.Id,
            LocationId = location3.Id,
            Description = "Festa junina tradicional com quadrilha e comidas típicas.",
            ExpectedAudience = 8000,
            Fee = 12000.00m,
            HasConflict = false
        };

        await _eventRepository.InsertAsync(event1);
        await _eventRepository.InsertAsync(event2);
        await _eventRepository.InsertAsync(event3);
    }
}
