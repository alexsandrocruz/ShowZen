using System;

namespace ShowZen.Services.Dtos.Proposals
{
    public class CreateProposalInput
    {
        public Guid EventId { get; set; }
    }
    
    public class ProposalViewDto
    {
        public Guid Id { get; set; }
        public Guid ProposalId { get; set; }
        public DateTime ViewedAt { get; set; }
        public string? IpAddress { get; set; }
        public string? UserAgent { get; set; }
    }
    
    public class TrackProposalViewInput
    {
        public string Token { get; set; } = string.Empty;
        public string? IpAddress { get; set; }
        public string? UserAgent { get; set; }
    }
}
