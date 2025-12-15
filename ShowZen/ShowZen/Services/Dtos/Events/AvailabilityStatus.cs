namespace ShowZen.Services.Dtos.Events;

/// <summary>
/// Indicates availability status for a specific day
/// </summary>
public enum AvailabilityStatus
{
    /// <summary>
    /// No events scheduled - completely free
    /// </summary>
    Free = 0,
    
    /// <summary>
    /// 1-2 events scheduled - partially available
    /// </summary>
    Partial = 1,
    
    /// <summary>
    /// 3+ events or full day - busy
    /// </summary>
    Busy = 2
}
