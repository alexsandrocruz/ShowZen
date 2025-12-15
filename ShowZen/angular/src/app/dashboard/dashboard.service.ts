import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats, GetDashboardStatsInput } from './models/dashboard.models';
import { RestService } from '@abp/ng.core';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private rest = inject(RestService);

    getStats(input?: GetDashboardStatsInput): Observable<DashboardStats> {
        return this.rest.request<DashboardStats, DashboardStats>(
            {
                method: 'GET',
                url: '/api/app/dashboard/stats',
                params: input as any
            }
        );
    }
}
