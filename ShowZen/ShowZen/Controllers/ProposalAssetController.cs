using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.IO;
using Volo.Abp.Domain.Repositories;
using ShowZen.Entities.Proposals;
using System;
using Microsoft.EntityFrameworkCore;

namespace ShowZen.Controllers
{
    [Route("proposals")]
    public class ProposalAssetController : AbpController
    {
        private readonly IRepository<Proposal, Guid> _proposalRepository;
        
        public ProposalAssetController(IRepository<Proposal, Guid> proposalRepository)
        {
            _proposalRepository = proposalRepository;
        }

        [HttpGet("{fileName}")]
        public async Task<IActionResult> GetProposalPdf(string fileName)
        {
            // Security check: simple strict filename validation to prevent directory traversal
            if (string.IsNullOrEmpty(fileName) || fileName.Contains("..") || fileName.Contains("/") || fileName.Contains("\\"))
            {
                return BadRequest("Invalid filename");
            }

            var wwwrootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            var proposalsDir = Path.Combine(wwwrootPath, "proposals");
            var filePath = Path.Combine(proposalsDir, fileName);

            // 1. Try to find the file directly first (Normal case for updated frontend)
            if (System.IO.File.Exists(filePath))
            {
                return PhysicalFile(filePath, "application/pdf", fileName);
            }

            // 2. Fallback: If filename looks like a token (Guid-like) or we want to be robust
            // Try to find proposal by Token (assuming fileName is token.pdf)
            var token = Path.GetFileNameWithoutExtension(fileName);
            
            // Basic format check for token (16 chars or GUID) - optimization
            if (token.Length >= 16)
            {
                // Try finding by Token
                var proposal = await _proposalRepository.FirstOrDefaultAsync(p => p.UniqueToken == token);
                
                if (proposal != null && !string.IsNullOrEmpty(proposal.PdfPath))
                {
                    // Verify if the REAL file exists
                    // proposal.PdfPath might be absolute or relative depending on how it was saved
                    // Logic in ProposalPdfGenerator returns the full path.
                    
                    var realPath = proposal.PdfPath;
                    
                    // If stored path is not absolute (just in case), combine
                    if (!Path.IsPathRooted(realPath)) 
                    {
                         realPath = Path.Combine(proposalsDir, Path.GetFileName(realPath));
                    }

                    if (System.IO.File.Exists(realPath))
                    {
                        // Return the file but name it nicely for download
                        var downloadName = !string.IsNullOrEmpty(proposal.PdfPath) 
                            ? Path.GetFileName(proposal.PdfPath) 
                            : fileName;
                            
                        return PhysicalFile(realPath, "application/pdf", downloadName);
                    }
                }
            }

            return NotFound();
        }
    }
}
