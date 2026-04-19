export interface MonthlyReportInput {
  year: number;
  month: number;
  artistIds?: string[];
}

export interface MonthlyReportItemDto {
  id: string;
  startDateTime: string;
  title: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone?: string;
  artistName: string;
  startTime?: string;
  locationName?: string;
}
