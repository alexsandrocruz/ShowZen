using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace ShowZen.Entities.Proposals
{
    [Table("ProposalViews")]
    public class ProposalView : CreationAuditedEntity<Guid>
    {
        [Required]
        public Guid ProposalId { get; set; }

        [Required]
        public DateTime ViewedAt { get; set; }

        [MaxLength(50)]
        public string? IpAddress { get; set; }

        [MaxLength(500)]
        public string? UserAgent { get; set; }

        // Navigation property
        [ForeignKey(nameof(ProposalId))]
        public virtual Proposal? Proposal { get; set; }
    }
}
