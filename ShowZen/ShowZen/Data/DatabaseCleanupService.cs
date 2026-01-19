using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using ShowZen.Entities.Proposals;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Uow;

namespace ShowZen.Data
{
    public class DatabaseCleanupService : ITransientDependency
    {
        private readonly IRepository<Event, Guid> _eventRepository;
        private readonly IRepository<Client, Guid> _clientRepository;
        private readonly IRepository<Location, Guid> _locationRepository;
        private readonly IRepository<Proposal, Guid> _proposalRepository;
        private readonly ILogger<DatabaseCleanupService> _logger;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public DatabaseCleanupService(
            IRepository<Event, Guid> eventRepository,
            IRepository<Client, Guid> clientRepository,
            IRepository<Location, Guid> locationRepository,
            IRepository<Proposal, Guid> proposalRepository,
            ILogger<DatabaseCleanupService> logger,
            IUnitOfWorkManager unitOfWorkManager)
        {
            _eventRepository = eventRepository;
            _clientRepository = clientRepository;
            _locationRepository = locationRepository;
            _proposalRepository = proposalRepository;
            _logger = logger;
            _unitOfWorkManager = unitOfWorkManager;
        }

        [UnitOfWork]
        public virtual async Task CleanupDatabaseAsync()
        {
            _logger.LogInformation("Starting database cleanup...");

            try
            {
                // Delete Events (with commissions cascade)
                var events = await _eventRepository.GetListAsync();
                var eventCount = events.Count;
                await _eventRepository.DeleteManyAsync(events);
                _logger.LogInformation($"Deleted {eventCount} events");

                // Delete Proposals
                var proposals = await _proposalRepository.GetListAsync();
                var proposalCount = proposals.Count;
                await _proposalRepository.DeleteManyAsync(proposals);
                _logger.LogInformation($"Deleted {proposalCount} proposals");

                // Delete Clients (includes local partners)
                var clients = await _clientRepository.GetListAsync();
                var clientCount = clients.Count;
                await _clientRepository.DeleteManyAsync(clients);
                _logger.LogInformation($"Deleted {clientCount} clients/partners");

                // Delete Locations
                var locations = await _locationRepository.GetListAsync();
                var locationCount = locations.Count;
                await _locationRepository.DeleteManyAsync(locations);
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
