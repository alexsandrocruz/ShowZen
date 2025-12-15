namespace ShowZen.Entities.Events;

public enum EventType
{
    Show = 1,
    Lecture = 2,
    Workshop = 3,
    TvAppearance = 4,
    RadioAppearance = 5,
    PodcastAppearance = 6,
    InstitutionalEvent = 7,
    Corporate = 8,
    Training = 9,
    Other = 99
}

public enum EventStatus
{
    Lead = 1,
    ProposalSent = 2,
    Negotiation = 8,
    Confirmed = 3,
    InProgress = 4,
    Completed = 5,
    Cancelled = 6,
    Lost = 7
}
