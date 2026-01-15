using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using ShowZen.Entities.Proposals;
using ShowZen.Entities.Events;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Services.Dtos.Proposals;
using ShowZen.Services.Artists;

namespace ShowZen.Services.Proposals
{
    public class ProposalAppService : ApplicationService
    {
        private readonly IRepository<Proposal, Guid> _proposalRepository;
        private readonly IRepository<ProposalView, Guid> _proposalViewRepository;
        private readonly IRepository<Event, Guid> _eventRepository;
        private readonly IRepository<Artist, Guid> _artistRepository;
        private readonly IRepository<Client, Guid> _clientRepository;
        private readonly ProposalPdfGenerator _pdfGenerator;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProposalAppService(
            IRepository<Proposal, Guid> proposalRepository,
            IRepository<ProposalView, Guid> proposalViewRepository,
            IRepository<Event, Guid> eventRepository,
            IRepository<Artist, Guid> artistRepository,
            IRepository<Client, Guid> clientRepository,
            ProposalPdfGenerator pdfGenerator,
            IWebHostEnvironment webHostEnvironment)
        {
            _proposalRepository = proposalRepository;
            _proposalViewRepository = proposalViewRepository;
            _eventRepository = eventRepository;
            _artistRepository = artistRepository;
            _clientRepository = clientRepository;
            _pdfGenerator = pdfGenerator;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<ProposalDto> GenerateProposalAsync(CreateProposalInput input)
        {
            // Get event with related data
            var queryable = await _eventRepository.GetQueryableAsync();
            var eventData = await queryable
                .Include(e => e.Artist)
                .Include(e => e.Client)
                .Include(e => e.Location)
                .FirstOrDefaultAsync(e => e.Id == input.EventId);

            if (eventData == null)
            {
                throw new Exception("Event not found");
            }

            var artist = await _artistRepository.GetAsync(eventData.ArtistId);
            var client = await _clientRepository.GetAsync(eventData.ClientId);

            // Generate unique token
            var token = _pdfGenerator.GenerateUniqueToken();

            // Generate budget page PDF
            var budgetPdf = await _pdfGenerator.GenerateBudgetPageAsync(eventData, artist, client);

            // Load artist template if exists
            byte[]? artistTemplate = null;
            if (!string.IsNullOrEmpty(artist.ProposalTemplateUrl))
            {
                try
                {
                    // Load from ArtistAppService
                    var artistAppService = LazyServiceProvider.LazyGetRequiredService<ArtistAppService>();
                    artistTemplate = await artistAppService.GetProposalTemplateAsync(artist.Id);
                }
                catch
                {
                    // If template loading fails, continue with budget only
                    artistTemplate = null;
                }
            }

            var finalPdf = await _pdfGenerator.MergePdfsAsync(artistTemplate, budgetPdf);

            // Save PDF to file system
            var pdfPath = await _pdfGenerator.SavePdfAsync(
                finalPdf, 
                token, 
                _webHostEnvironment.WebRootPath);

            // Create proposal record
            var proposal = new Proposal
            {
                EventId = input.EventId,
                UniqueToken = token,
                GeneratedAt = DateTime.Now,
                ExpiresAt = DateTime.Now.AddDays(15),
                PdfPath = pdfPath,
                Status = Entities.Proposals.ProposalStatus.Sent
            };

            await _proposalRepository.InsertAsync(proposal);

            return new ProposalDto
            {
                Id = proposal.Id,
                EventId = proposal.EventId,
                UniqueToken = proposal.UniqueToken,
                GeneratedAt = proposal.GeneratedAt,
                ExpiresAt = proposal.ExpiresAt,
                ViewCount = proposal.ViewCount,
                PdfPath = proposal.PdfPath,
                Status = (Dtos.Proposals.ProposalStatus)proposal.Status,
                EventTitle = eventData.Title,
                ArtistName = artist.Name,
                ClientName = client.Name
            };
        }

        public async Task<ProposalDto> GetProposalByTokenAsync(string token)
        {
            var queryable = await _proposalRepository.GetQueryableAsync();
            var proposal = await queryable
                .Include(p => p.Event)
                .ThenInclude(e => e.Artist)
                .Include(p => p.Event)
                .ThenInclude(e => e.Client)
                .FirstOrDefaultAsync(p => p.UniqueToken == token);

            if (proposal == null)
            {
                throw new Exception("Proposal not found");
            }

            return new ProposalDto
            {
                Id = proposal.Id,
                EventId = proposal.EventId,
                UniqueToken = proposal.UniqueToken,
                GeneratedAt = proposal.GeneratedAt,
                ExpiresAt = proposal.ExpiresAt,
                ViewCount = proposal.ViewCount,
                PdfPath = proposal.PdfPath,
                Status = (Dtos.Proposals.ProposalStatus)proposal.Status,
                EventTitle = proposal.Event?.Title ?? "",
                ArtistName = proposal.Event?.Artist?.Name ?? "",
                ClientName = proposal.Event?.Client?.Name ?? ""
            };
        }

        public async Task TrackViewAsync(TrackProposalViewInput input)
        {
            var proposal = await _proposalRepository
                .FirstOrDefaultAsync(p => p.UniqueToken == input.Token);

            if (proposal == null)
            {
                return;
            }

            // Increment view count
            proposal.ViewCount++;
            await _proposalRepository.UpdateAsync(proposal);

            // Create view record
            var proposalView = new ProposalView
            {
                ProposalId = proposal.Id,
                ViewedAt = DateTime.Now,
                IpAddress = input.IpAddress,
                UserAgent = input.UserAgent
            };

            await _proposalViewRepository.InsertAsync(proposalView);
        }

        public async Task<int> GetProposalViewCountAsync(Guid proposalId)
        {
            var proposal = await _proposalRepository.GetAsync(proposalId);
            return proposal.ViewCount;
        }
    }
}
