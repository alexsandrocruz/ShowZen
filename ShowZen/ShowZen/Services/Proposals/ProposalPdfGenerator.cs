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

                            // Client & Event Info (Refined)
                            column.Item().PaddingTop(10).Column(info => 
                            {
                                info.Spacing(5);
                                
                                // Row 1: Event Title and Date/Time
                                info.Item().Row(r => {
                                    r.RelativeItem().Text(eventData.Title).FontSize(14).Bold().FontColor(PrimaryColor);
                                    
                                    var timeString = eventData.StartDateTime.ToString("HH:mm");
                                    if (eventData.EndDateTime.HasValue)
                                    {
                                        timeString += $" - {eventData.EndDateTime.Value:HH:mm}";
                                    }
                                    
                                    r.AutoItem().Text($"{eventData.StartDateTime:dd/MM/yyyy} • {timeString}")
                                        .FontSize(12).FontColor(Colors.Black);
                                });

                                // Row 2: Client
                                info.Item().Text($"Cliente: {client.Name}").FontSize(11);

                                // Row 3: Location and Emission Date
                                info.Item().Row(r => {
                                    var locationText = eventData.Location?.Name ?? "A definir";
                                    r.RelativeItem().Text($"Local: {locationText}").FontSize(11);

                                    r.RelativeItem().AlignRight().Text($"Emissão: {DateTime.Now:dd/MM/yyyy}").FontSize(10).FontColor(Colors.Grey.Darken2);
                                });
                                
                                info.Item().PaddingTop(5).LineHorizontal(1).LineColor(Colors.Grey.Lighten2);
                            });

                            // Financial Items & Total (Side by Side)
                            column.Item().PaddingTop(15).Row(row => 
                            {
                                // Left: List of Costs
                                row.RelativeItem().Column(costs => 
                                {
                                    costs.Spacing(10);
                                    
                                    // Fee
                                    if (eventData.Fee > 0)
                                    {
                                        costs.Item().Text("Cachê Artístico").FontSize(12);
                                        costs.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);
                                    }

                                    // Production
                                    if (eventData.ProductionValue > 0)
                                    {
                                        costs.Item().Text("Custos de Produção").FontSize(12);
                                        costs.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);
                                    }
                                });

                                // Spacer
                                row.ConstantItem(30);

                                // Right: Total Block
                                row.AutoItem().Background(PrimaryColor)
                                    .PaddingVertical(10).PaddingHorizontal(30)
                                    .Text($"TOTAL: R$ {(eventData.Fee + (eventData.ProductionValue ?? 0)):N2}")
                                    .FontSize(14).Bold().FontColor(Colors.White);
                            });

                            // Scope Lists (Inclusos / Não Inclusos)
                            column.Item().PaddingTop(20).Table(table =>
                            {
                                table.ColumnsDefinition(columns =>
                                {
                                    columns.RelativeColumn();
                                    columns.ConstantColumn(20); // Spacer
                                    columns.RelativeColumn();
                                });

                                // Headers
                                table.Header(header =>
                                {
                                    header.Cell().Column(col => 
                                    {
                                        col.Item().Text("CUSTOS INCLUSOS").Bold().FontColor(PrimaryColor);
                                        col.Item().LineHorizontal(2).LineColor(PrimaryColor);
                                    });
                                    
                                    header.Cell(); // Spacer

                                    header.Cell().Column(col => 
                                    {
                                        col.Item().Text("CUSTOS NÃO INCLUSOS").Bold().FontColor(Colors.Red.Darken2);
                                        col.Item().LineHorizontal(2).LineColor(Colors.Red.Darken2);
                                    });
                                });

                                // Content
                                table.Cell().PaddingTop(10).Column(col => 
                                {
                                    col.Spacing(5);
                                    var items = new[] { "Cachê", "Despesa Logística", "Transporte", "Translado", "Aéreos", "Alimentação", "Despesas Administrativas", "IMPOSTOS/Encargos" };
                                    foreach(var item in items) col.Item().Text($"• {item}").FontSize(10);
                                });

                                table.Cell(); // Spacer

                                table.Cell().PaddingTop(10).Column(col => 
                                {
                                    col.Spacing(5);
                                    var items = new[] { "Abastecimento de Camarim", "Estrutura", "Palco", "Som", "TRIO", "Iluminação/ Luz e Led" };
                                    foreach(var item in items) col.Item().Text($"• {item}").FontSize(10);
                                });
                            });

                            // Observations / Terms Section
                            column.Item().PaddingTop(30).Background(Colors.Grey.Lighten4).Padding(15).Column(terms => 
                            {
                                terms.Spacing(10);
                                terms.Item().Text("OBSERVAÇÕES:").Bold().FontSize(12);
                                terms.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);

                                terms.Item().Text("1- Essa Proposta NÃO é válida como confirmação do Show;").FontSize(10);
                                terms.Item().Text("2- Pagamento: 50% na assinatura e 50% até 24h antes da data do show;").FontSize(10);
                                terms.Item().Text("3- Esse orçamento é válido por 15 dias;").FontSize(10);
                                terms.Item().Text("4- Total geral de 16 pessoas com toda banda!").FontSize(10);
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
