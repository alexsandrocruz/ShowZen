using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;
using ShowZen.Entities.Events;

namespace ShowZen.Entities.Proposals
{
    [Table("Proposals")]
    public class Proposal : AuditedAggregateRoot<Guid>
    {
        [Required]
        public Guid EventId { get; set; }

        [Required]
        [MaxLength(100)]
        public string UniqueToken { get; set; } = string.Empty;

        [Required]
        public DateTime GeneratedAt { get; set; }

        [Required]
        public DateTime ExpiresAt { get; set; }

        public int ViewCount { get; set; } = 0;

        [MaxLength(500)]
        public string? PdfPath { get; set; }

        [Required]
        public ProposalStatus Status { get; set; } = ProposalStatus.Draft;

        // Navigation property
        [ForeignKey(nameof(EventId))]
        public virtual Event? Event { get; set; }
    }

    public enum ProposalStatus
    {
        Draft = 0,
        Sent = 1,
        Accepted = 2,
        Rejected = 3
    }
}
