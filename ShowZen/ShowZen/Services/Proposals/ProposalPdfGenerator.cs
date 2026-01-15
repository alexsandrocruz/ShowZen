using System;
using System.IO;
using System.Threading.Tasks;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using ShowZen.Entities.Events;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using Volo.Abp.DependencyInjection;

namespace ShowZen.Services.Proposals
{
    public class ProposalPdfGenerator : ITransientDependency
    {
        private readonly ILogger<ProposalPdfGenerator> _logger;

        public ProposalPdfGenerator(ILogger<ProposalPdfGenerator> logger)
        {
            _logger = logger;
        }

        public async Task<byte[]> GenerateBudgetPageAsync(Event eventData, Artist artist, Client client)
        {
            return await Task.Run(() =>
            {
                // Colors based on the "Borcelle" reference (Gold/Brown aesthetic)
                var GoldColor = "#B8860B"; // Dark Golden Rod
                var LightBg = "#FDFBF7";   // Very light beige
                var TextColor = "#333333";
                var PrimaryColor = "#8B6508"; // Darker gold for accents

                var document = Document.Create(container =>
                {
                    container.Page(page =>
                    {
                        page.Size(PageSizes.A4);
                        page.Margin(0); // No margin for full-bleed header
                        page.PageColor(LightBg);
                        page.DefaultTextStyle(x => x.FontSize(10).FontFamily(Fonts.Arial).FontColor(TextColor));

                        // Header Content
                        page.Header().Height(120).Background(PrimaryColor).Row(row =>
                        {
                            // Title Left
                            row.RelativeItem().AlignMiddle().PaddingLeft(40).Column(col => 
                            { 
                                col.Item().Text("Orçamento").FontSize(36).FontColor(Colors.White).SemiBold();
                            });

                             // Logo Right (if exists)
                            if (!string.IsNullOrEmpty(artist.LogoUrl))
                            {
                                // We can't easily load remote internal URL here if it's localhost without http context, 
                                // but assuming the earlier code worked for fetching blob, we might need the actual byte array for the image here.
                                // However, QuestPDF supports URLs. Let's try to use the URL if it's public/accessible, 
                                // OR better yet, let's keep it simple for now and just put text if image fails or use a placeholder logic.
                                // Since we don't have the image bytes passed into this method, we rely on the URL being accessible.
                                // NOTE: In the previous implementation, we were using the artist template PDF (bytes). 
                                // Here we are talking about the Logo image.
                                
                                // For robust image loading, usually we need to download it first. 
                                // As a quick fix for layout, I will assume we can't easily access the logo URL inside this method 
                                // without an HTTP client. I will prioritize the Text Layout first.
                                
                                row.RelativeItem().AlignMiddle().PaddingRight(40).AlignRight().Text(artist.Name)
                                    .FontSize(14).FontColor(Colors.White).Bold();
                            }
                            else
                            {
                                row.RelativeItem().AlignMiddle().PaddingRight(40).AlignRight().Text(artist.Name)
                                    .FontSize(20).FontColor(Colors.White).Bold();
                            }
                        });


                        page.Content().PaddingVertical(40).PaddingHorizontal(40).Column(column =>
                        {
                            column.Spacing(20);

                            // "PROPOSTA" Badge
                            column.Item().Background(GoldColor).Width(150).PaddingVertical(5).PaddingHorizontal(20)
                                .Text("PROPOSTA").FontColor(Colors.White).Bold().LetterSpacing(0.1f).AlignCenter();

                            // Client & Event Info (Styled as clean lines)
                            column.Item().PaddingTop(20).Column(info => 
                            {
                                info.Spacing(10);
                                
                                // Event Name / Description
                                info.Item().Row(r => {
                                    r.RelativeItem().Text(t => {
                                        t.Span(eventData.Description ?? "Show Artístico").FontSize(14).Medium();
                                    });
                                    r.AutoItem().Text(eventData.StartDateTime.ToString("dd/MM/yyyy")).FontSize(14).Italic().FontColor(Colors.Grey.Darken1);
                                });

                                info.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);

                                // Client
                                info.Item().PaddingTop(5).Row(r => {
                                    r.RelativeItem().Text($"Cliente: {client.Name}").FontSize(12);
                                });
                                
                                // Location
                                info.Item().Row(r => {
                                    r.RelativeItem().Text($"Local: {eventData.Location?.City ?? "A definir"} - {eventData.Location?.State}").FontSize(12);
                                });
                            });

                            // Financial Items List (Simulating the clean "Item ......... Price" look)
                            column.Item().PaddingTop(30).Column(items => 
                            {
                                items.Spacing(15);

                                // Fee
                                if (eventData.Fee > 0)
                                {
                                    items.Item().Row(row => 
                                    {
                                        row.RelativeItem().Text("Cachê Artístico").FontSize(12);
                                        row.AutoItem().Text($"R$ {eventData.Fee:N2}").FontSize(12).SemiBold();
                                    });
                                    items.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);
                                }

                                // Production
                                if (eventData.ProductionValue > 0)
                                {
                                     items.Item().Row(row => 
                                    {
                                        row.RelativeItem().Text("Custos de Produção").FontSize(12);
                                        row.AutoItem().Text($"R$ {eventData.ProductionValue:N2}").FontSize(12).SemiBold();
                                    });
                                    items.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);
                                }
                                
                                // Other costs placeholder if we had them detailing
                            });

                            // Total Section
                            column.Item().PaddingTop(20).AlignRight().Row(row => 
                            {
                                row.AutoItem().Background(PrimaryColor)
                                    .PaddingVertical(10).PaddingHorizontal(30)
                                    .Text($"TOTAL: R$ {(eventData.Fee + (eventData.ProductionValue ?? 0)):N2}")
                                    .FontSize(14).Bold().FontColor(Colors.White);
                            });

                            // Terms Section
                            column.Item().PaddingTop(40).Column(terms => 
                            {
                                terms.Spacing(15);

                                // Delivery/Execution
                                terms.Item().Column(c => 
                                {
                                    c.Item().Text("Data do Evento:").FontSize(10).Bold();
                                    c.Item().Text($"O evento está programado para ocorrer em {eventData.StartDateTime:dd 'de' MMMM 'de' yyyy}, com início previsto para {eventData.StartDateTime:HH:mm}.").FontSize(10).FontColor(Colors.Grey.Darken2);
                                });

                                // Payment
                                terms.Item().Column(c => 
                                {
                                    c.Item().Text("Pagamento:").FontSize(10).Bold();
                                    c.Item().PaddingLeft(10).Column(ul => 
                                    {
                                        ul.Spacing(5);
                                        ul.Item().Row(li => {
                                            li.AutoItem().Text("• ").FontSize(10);
                                            li.RelativeItem().Text("50% na assinatura do contrato.").FontSize(10).FontColor(Colors.Grey.Darken2);
                                        });
                                        ul.Item().Row(li => {
                                            li.AutoItem().Text("• ").FontSize(10);
                                            li.RelativeItem().Text("50% restante até 24h antes do show/evento.").FontSize(10).FontColor(Colors.Grey.Darken2);
                                        });
                                        ul.Item().Row(li => {
                                            li.AutoItem().Text("• ").FontSize(10);
                                            li.RelativeItem().Text("Condições sujeitas a alteração sem aviso prévio.").FontSize(10).FontColor(Colors.Grey.Darken2);
                                        });
                                    });
                                });
                            });
                        });

                        // Footer
                        page.Footer().Height(50).Background(LightBg).Column(col => 
                        {
                            col.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten1);
                            col.Item().PaddingTop(15).PaddingHorizontal(40).Row(row => 
                            {
                                row.RelativeItem().Text("ShowZen - Gestão Artística").FontSize(8).Bold();
                                row.RelativeItem().AlignRight().Text($"Gerado em {DateTime.Now:dd/MM/yyyy}").FontSize(8).FontColor(Colors.Grey.Darken1);
                            });
                        });
                    });
                });

                return document.GeneratePdf();
            });
        }

        public async Task<byte[]> MergePdfsAsync(byte[]? artistTemplate, byte[] budgetPage)
        {
            // If no artist template, return only budget page
            if (artistTemplate == null || artistTemplate.Length == 0)
            {
                return budgetPage;
            }

            try
            {
                return await Task.Run(() =>
                {
                    using var outputStream = new MemoryStream();
                    using var writer = new iText.Kernel.Pdf.PdfWriter(outputStream);
                    using var mergedPdf = new iText.Kernel.Pdf.PdfDocument(writer);

                    // Add artist template pages
                    using (var templateStream = new MemoryStream(artistTemplate))
                    using (var templateReader = new iText.Kernel.Pdf.PdfReader(templateStream))
                    using (var templatePdf = new iText.Kernel.Pdf.PdfDocument(templateReader))
                    {
                        templatePdf.CopyPagesTo(1, templatePdf.GetNumberOfPages(), mergedPdf);
                    }

                    // Add budget page
                    using (var budgetStream = new MemoryStream(budgetPage))
                    using (var budgetReader = new iText.Kernel.Pdf.PdfReader(budgetStream))
                    using (var budgetPdf = new iText.Kernel.Pdf.PdfDocument(budgetReader))
                    {
                        budgetPdf.CopyPagesTo(1, budgetPdf.GetNumberOfPages(), mergedPdf);
                    }

                    mergedPdf.Close();
                    return outputStream.ToArray();
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to merge artist template PDF with budget page.");
                // If merge fails, return budget page only
                return budgetPage;
            }
        }

        public async Task<string> SavePdfAsync(byte[] pdfBytes, string token, string wwwrootPath)
        {
            var proposalsDir = Path.Combine(wwwrootPath, "proposals");
            
            // Create directory if it doesn't exist
            if (!Directory.Exists(proposalsDir))
            {
                Directory.CreateDirectory(proposalsDir);
            }

            var fileName = $"{token}.pdf";
            var filePath = Path.Combine(proposalsDir, fileName);

            await File.WriteAllBytesAsync(filePath, pdfBytes);

            return filePath;
        }

        public string GenerateUniqueToken()
        {
            return Guid.NewGuid().ToString("N").Substring(0, 16);
        }
    }
}
