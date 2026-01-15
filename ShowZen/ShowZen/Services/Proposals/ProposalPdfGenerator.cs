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
        public async Task<byte[]> GenerateBudgetPageAsync(Event eventData, Artist artist, Client client)
        {
            return await Task.Run(() =>
            {
                var document = Document.Create(container =>
                {
                    container.Page(page =>
                    {
                        page.Size(PageSizes.A4);
                        page.Margin(40);
                        page.PageColor(Colors.White);
                        page.DefaultTextStyle(x => x.FontSize(11).FontFamily("Arial"));

                        page.Content().Column(column =>
                        {
                            column.Spacing(15);

                            // Header with Artist Logo
                            if (!string.IsNullOrEmpty(artist.LogoUrl))
                            {
                                column.Item().AlignCenter().Text("PROPOSTA COMERCIAL")
                                    .FontSize(20).Bold().FontColor(Colors.Blue.Darken2);
                            }
                            else
                            {
                                column.Item().AlignCenter().Text("PROPOSTA COMERCIAL")
                                    .FontSize(20).Bold().FontColor(Colors.Blue.Darken2);
                            }

                            column.Item().LineHorizontal(2).LineColor(Colors.Blue.Darken2);

                            // Event Details
                            column.Item().PaddingTop(10).Column(details =>
                            {
                                details.Item().Row(row =>
                                {
                                    row.RelativeItem().Text(text =>
                                    {
                                        text.Span("REALIZAÇÃO: ").Bold();
                                        text.Span(client.Name);
                                    });
                                });

                                details.Item().Row(row =>
                                {
                                    row.RelativeItem().Text(text =>
                                    {
                                        text.Span("DATA: ").Bold();
                                        text.Span(eventData.StartDateTime.ToString("dd/MM/yyyy"));
                                    });
                                    row.RelativeItem().Text(text =>
                                    {
                                        text.Span("CIDADE: ").Bold();
                                        text.Span($"{eventData.Location?.City ?? "A definir"}/{eventData.Location?.State ?? ""}");
                                    });
                                });

                                details.Item().Row(row =>
                                {
                                    row.RelativeItem().Text(text =>
                                    {
                                        text.Span("HORÁRIO DO SHOW: ").Bold();
                                        text.Span(eventData.StartDateTime.ToString("HH:mm") + " às " + eventData.EndDateTime?.ToString("HH:mm"));
                                    });
                                });
                            });

                            // Description
                            column.Item().PaddingTop(10).Text(eventData.Description ?? 
                                $"Nessa proposta estão contidas as condições para realização de show com {artist.Name}.")
                                .FontSize(10).Italic();

                            // Costs Table
                            column.Item().PaddingTop(15).Table(table =>
                            {
                                table.ColumnsDefinition(columns =>
                                {
                                    columns.RelativeColumn();
                                    columns.RelativeColumn();
                                });

                                // Header
                                table.Header(header =>
                                {
                                    header.Cell().Background(Colors.Blue.Lighten3)
                                        .Padding(8).Text("CUSTOS INCLUSOS").Bold();
                                    header.Cell().Background(Colors.Blue.Lighten3)
                                        .Padding(8).Text("CUSTOS NÃO INCLUSOS").Bold();
                                });

                                // Content
                                table.Cell().Border(1).Padding(8).Column(col =>
                                {
                                    col.Item().Text("• Cachê");
                                    col.Item().Text("• Despesa Logística");
                                    col.Item().Text("• Transporte");
                                    col.Item().Text("• Translado");
                                    col.Item().Text("• Aéreos");
                                    col.Item().Text("• Alimentação");
                                    col.Item().Text("• Despesas Administrativas");
                                    col.Item().Text("• IMPOSTOS/Encargos");
                                });

                                table.Cell().Border(1).Padding(8).Column(col =>
                                {
                                    col.Item().Text("• Abastecimento de Camarim");
                                    col.Item().Text("• Estrutura");
                                    col.Item().Text("• Palco");
                                    col.Item().Text("• Som");
                                    col.Item().Text("• Iluminação/ Luz e Led");
                                });
                            });

                            // Value
                            column.Item().PaddingTop(15).Background(Colors.Green.Lighten4)
                                .Padding(10).AlignCenter().Text(text =>
                                {
                                    text.Span("Valor: ").Bold().FontSize(14);
                                    text.Span($"R$ {eventData.Fee:N2}").Bold().FontSize(16).FontColor(Colors.Green.Darken2);
                                });

                            // Observations
                            column.Item().PaddingTop(15).Column(obs =>
                            {
                                obs.Item().Text("OBSERVAÇÕES:").Bold().FontSize(12);
                                obs.Item().PaddingLeft(10).Text("1- Essa Proposta NÃO é válida como confirmação do Show;");
                                obs.Item().PaddingLeft(10).Text("2- Pagamento: 50% na assinatura e 50% até 24h antes da data do show;");
                                obs.Item().PaddingLeft(10).Text("3- Esse orçamento é válido por 15 dias;");
                                obs.Item().PaddingLeft(10).Text($"4- {eventData.Notes ?? "Informações adicionais a definir"}");
                            });
                        });

                        // Footer
                        page.Footer().AlignCenter().Text(text =>
                        {
                            text.Span("Proposta gerada em ").FontSize(8).FontColor(Colors.Grey.Medium);
                            text.Span(DateTime.Now.ToString("dd/MM/yyyy HH:mm")).FontSize(8).FontColor(Colors.Grey.Medium);
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

            // TODO: Implement PDF merging using a library like iTextSharp or PdfSharp
            // For now, return budget page only
            return await Task.FromResult(budgetPage);
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
