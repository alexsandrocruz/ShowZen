using System;
using System.Collections.Generic;

namespace ShowZen.Services.Dtos.Reports;

public class MonthlyReportInput
{
    public int Year { get; set; }
    public int Month { get; set; }
    public List<Guid>? ArtistIds { get; set; }
}
