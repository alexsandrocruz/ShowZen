using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using ShowZen.Entities.Proposals;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Data
{
    public class DatabaseCleanupService : ITransientDependency
    {
        private readonly IRepository<Event, Guid> _eventRepository;
        private readonly IRepository<Client, Guid> _clientRepository;
        private readonly IRepository<Location, Guid> _locationRepository;
        private readonly IRepository<Proposal, Guid> _proposalRepository;
        private readonly ILogger<DatabaseCleanupService> _logger;

        public DatabaseCleanupService(
            IRepository<Event, Guid> eventRepository,
            IRepository<Client, Guid> clientRepository,
            IRepository<Location, Guid> locationRepository,
            IRepository<Proposal, Guid> proposalRepository,
            ILogger<DatabaseCleanupService> logger)
        {
            _eventRepository = eventRepository;
            _clientRepository = clientRepository;
            _locationRepository = locationRepository;
            _proposalRepository = proposalRepository;
            _logger = logger;
        }

        public async Task CleanupDatabaseAsync()
        {
            _logger.LogInformation("Starting database cleanup...");

            try
            {
                // Delete Events (with commissions cascade)
                var eventCount = await _eventRepository.CountAsync();
                await _eventRepository.DeleteManyAsync(await _eventRepository.GetListAsync());
                _logger.LogInformation($"Deleted {eventCount} events");

                // Delete Proposals
                var proposalCount = await _proposalRepository.CountAsync();
                await _proposalRepository.DeleteManyAsync(await _proposalRepository.GetListAsync());
                _logger.LogInformation($"Deleted {proposalCount} proposals");

                // Delete Clients (includes local partners)
                var clientCount = await _clientRepository.CountAsync();
                await _clientRepository.DeleteManyAsync(await _clientRepository.GetListAsync());
                _logger.LogInformation($"Deleted {clientCount} clients/partners");

                // Delete Locations
                var locationCount = await _locationRepository.CountAsync();
                await _locationRepository.DeleteManyAsync(await _locationRepository.GetListAsync());
                _logger.LogInformation($"Deleted {locationCount} locations");

                _logger.LogInformation("Database cleanup completed successfully!");
                _logger.LogInformation("Artists and Users were preserved.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during database cleanup");
                throw;
            }
        }
    }
}
