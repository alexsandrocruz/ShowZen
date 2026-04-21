import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { MonthlyReportInput, MonthlyReportItemDto } from '../dtos/reports/models';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private restService = inject(RestService);
  apiName = 'Default';

  getMonthlyConfirmedEvents = (input: MonthlyReportInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MonthlyReportItemDto[]>({
      method: 'GET',
      url: '/api/app/report/monthly-confirmed-events',
      params: {
        year: input.year,
        month: input.month,
        artistIds: input.artistIds,
      },
    },
      { apiName: this.apiName, ...config });

  getMonthlyConfirmedEventsPdfBlob = (input: MonthlyReportInput) => {
    return this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/app/report/monthly-confirmed-events-pdf',
      params: {
        year: input.year,
        month: input.month,
        artistIds: input.artistIds,
      },
    },
      { apiName: this.apiName });
  };
}
