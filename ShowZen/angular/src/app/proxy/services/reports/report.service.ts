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

  getMonthlyConfirmedEventsPdfUrl = (input: MonthlyReportInput): string => {
    const params = new URLSearchParams();
    params.set('year', input.year.toString());
    params.set('month', input.month.toString());
    if (input.artistIds && input.artistIds.length > 0) {
      input.artistIds.forEach(id => params.append('artistIds', id));
    }
    return `/api/app/report/monthly-confirmed-events/pdf?${params.toString()}`;
  };
}
