using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using ShowZen.Services.Dtos.Reports;
using Volo.Abp.DependencyInjection;

namespace ShowZen.Services.Reports;

public class MonthlyReportPdfGenerator : ITransientDependency
{
    public Task<byte[]> GenerateAsync(
        List<MonthlyReportItemDto> events,
        int month,
        int year,
        string monthYearLabel)
    {
        return Task.Run(() =>
        {
            var primaryColor = "#2563EB"; // Blue
            var lightBg = "#F8FAFC";
            var textColor = "#1E293B";
            var headerBg = "#1E40AF";
            var rowAlt = "#F1F5F9";

            var document = Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(40);
                    page.PageColor(lightBg);
                    page.DefaultTextStyle(x => x.FontSize(9).FontFamily(Fonts.Arial).FontColor(textColor));

                    // Header
                    page.Header().Column(col =>
                    {
                        col.Item().Background(headerBg).PaddingVertical(20).PaddingHorizontal(30).Row(row =>
                        {
                            row.RelativeItem().Text("AGENDA DO MÊS")
                                .FontSize(24).FontColor(Colors.White).Bold();
                            row.AutoItem().AlignMiddle().Text(monthYearLabel)
                                .FontSize(16).FontColor("#93C5FD");
                        });

                        // Summary bar
                        col.Item().PaddingTop(10).Row(row =>
                        {
                            row.AutoItem().Text($"{events.Count} evento(s) confirmado(s)")
                                .FontSize(11).FontColor(Colors.Grey.Darken2);
                        });
                    });

                    // Content
                    page.Content().PaddingTop(15).Column(col =>
                    {
                        col.Spacing(0);

                        if (events.Count == 0)
                        {
                            col.Item().PaddingVertical(40).AlignCenter()
                                .Text("Nenhum evento confirmado neste mês.")
                                .FontSize(14).FontColor(Colors.Grey.Medium);
                            return;
                        }

                        // Table header
                        col.Item().Background(primaryColor).Row(row =>
                        {
                            row.ConstantItem(35).Padding(6).Text("Data")
                                .FontSize(8).Bold().FontColor(Colors.White);
                            row.ConstantItem(100).Padding(6).Text("Cidade")
                                .FontSize(8).Bold().FontColor(Colors.White);
                            row.RelativeItem(2).Padding(6).Text("Evento")
                                .FontSize(8).Bold().FontColor(Colors.White);
                            row.RelativeItem().Padding(6).Text("Contato")
                                .FontSize(8).Bold().FontColor(Colors.White);
                            row.ConstantItem(80).Padding(6).Text("Telefone")
                                .FontSize(8).Bold().FontColor(Colors.White);
                        });

                        // Table rows
                        int index = 0;
                        foreach (var evt in events)
                        {
                            var bgColor = index % 2 == 0 ? "#FFFFFF" : rowAlt;
                            index++;

                            col.Item().Background(bgColor).BorderBottom(1)
                                .BorderColor(Colors.Grey.Lighten2).Row(row =>
                                {
                                    row.ConstantItem(35).Padding(6).Text(
                                            evt.StartDateTime.ToString("dd/MM"))
                                        .FontSize(8);

                                    var cityState = !string.IsNullOrWhiteSpace(evt.State)
                                        ? $"{evt.City}/{evt.State}"
                                        : evt.City;
                                    row.ConstantItem(100).Padding(6).Text(cityState)
                                        .FontSize(8);

                                    row.RelativeItem(2).Padding(6).Column(c =>
                                    {
                                        c.Item().Text(evt.Title).FontSize(8);
                                        if (!string.IsNullOrWhiteSpace(evt.LocationName))
                                        {
                                            c.Item().Text(evt.LocationName).FontSize(7).FontColor(Colors.Grey.Darken2);
                                        }
                                    });

                                    row.RelativeItem().Padding(6).Text(evt.ContactName)
                                        .FontSize(8);

                                    row.ConstantItem(80).Padding(6).Text(
                                            evt.ContactPhone ?? "—")
                                        .FontSize(8);
                                });
                        }
                    });

                    // Footer
                    page.Footer().PaddingTop(15).BorderTop(1).BorderColor(Colors.Grey.Lighten2)
                        .Row(row =>
                        {
                            row.RelativeItem().Text("ShowZen — Gestão Artística")
                                .FontSize(7).FontColor(Colors.Grey.Medium);
                            row.RelativeItem().AlignRight().Text($"Gerado em {System.DateTime.Now:dd/MM/yyyy HH:mm}")
                                .FontSize(7).FontColor(Colors.Grey.Medium);
                        });
                });
            });

            return document.GeneratePdf();
        });
    }
}
