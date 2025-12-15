import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { DashboardStatsDto, GetDashboardStatsInput } from '../dtos/dashboard/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  getStats = (input: GetDashboardStatsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DashboardStatsDto>({
      method: 'GET',
      url: '/api/app/dashboard/stats',
      params: { startDate: input.startDate, endDate: input.endDate },
    },
    { apiName: this.apiName,...config });
}