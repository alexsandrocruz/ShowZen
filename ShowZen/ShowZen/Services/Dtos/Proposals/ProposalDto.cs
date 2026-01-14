using System;

namespace ShowZen.Services.Dtos.Proposals
{
    public class ProposalDto
    {
        public Guid Id { get; set; }
        public Guid EventId { get; set; }
        public string UniqueToken { get; set; } = string.Empty;
        public DateTime GeneratedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
        public int ViewCount { get; set; }
        public string? PdfPath { get; set; }
        public ProposalStatus Status { get; set; }
        
        // Related data
        public string EventTitle { get; set; } = string.Empty;
        public string ArtistName { get; set; } = string.Empty;
        public string ClientName { get; set; } = string.Empty;
    }

    public enum ProposalStatus
    {
        Draft = 0,
        Sent = 1,
        Accepted = 2,
        Rejected = 3
    }
}
