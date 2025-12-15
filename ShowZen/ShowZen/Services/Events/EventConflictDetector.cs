using System;
using System.Linq;
using System.Threading.Tasks;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Events;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace ShowZen.Services.Events;

public class EventConflictDetector : ITransientDependency
{
    private readonly IRepository<Event, Guid> _eventRepository;
    private readonly IRepository<Artist, Guid> _artistRepository;
    
    public EventConflictDetector(
        IRepository<Event, Guid> eventRepository,
        IRepository<Artist, Guid> artistRepository)
    {
        _eventRepository = eventRepository;
        _artistRepository = artistRepository;
    }
    
    public async Task<bool> HasConflictAsync(
        Guid artistId,
        DateTime startDateTime,
        DateTime? endDateTime,
        Guid? excludeEventId = null)
    {
        var queryable = await _eventRepository.GetQueryableAsync();
        
        var query = queryable.Where(e => 
            e.ArtistId == artistId &&
            e.Status != EventStatus.Cancelled &&
            e.Status != EventStatus.Lost
        );
        
        // Excluir o evento atual ao editar
        if (excludeEventId.HasValue)
        {
            query = query.Where(e => e.Id != excludeEventId.Value);
        }
        
        var end = endDateTime ?? startDateTime.AddHours(2); // Default 2 horas se não especificado
        
        // Verificar sobreposição de datas
        var hasConflict = await _eventRepository.AnyAsync(e => 
            e.ArtistId == artistId &&
            e.Status != EventStatus.Cancelled &&
            e.Status != EventStatus.Lost &&
            (excludeEventId == null || e.Id != excludeEventId.Value) &&
            (e.StartDateTime <= end && (e.EndDateTime ?? e.StartDateTime.AddHours(2)) >= startDateTime)
        );
        
        return hasConflict;
    }
    
    public async Task<Artist?> SuggestAlternativeArtistAsync(
        Guid requestedArtistId,
        ArtistType artistType,
        DateTime startDateTime,
        DateTime? endDateTime)
    {
        var artists = await _artistRepository.GetListAsync(a => 
            a.Type == artistType && 
            a.IsActive && 
            a.Id != requestedArtistId
        );
        
        foreach (var artist in artists)
        {
            var hasConflict = await HasConflictAsync(artist.Id, startDateTime, endDateTime);
            if (!hasConflict)
            {
                return artist;
            }
        }
        
        return null;
    }
}
