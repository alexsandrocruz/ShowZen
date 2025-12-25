import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { CalendarEventDto, CreateUpdateEventDto, EventDto, GetEventListDto, GetScheduleOverviewInput, ScheduleOverviewDto } from '../dtos/events/models';
import type { EventStatus } from '../../entities/events/event-status.enum';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private restService = inject(RestService);
  apiName = 'Default';


  create = (input: CreateUpdateEventDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventDto>({
      method: 'POST',
      url: '/api/app/event',
      body: input,
    },
      { apiName: this.apiName, ...config });


  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/event/${id}`,
    },
      { apiName: this.apiName, ...config });


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventDto>({
      method: 'GET',
      url: `/api/app/event/${id}`,
    },
      { apiName: this.apiName, ...config });


  getCalendarEvents = (startDate: string, endDate: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CalendarEventDto>>({
      method: 'GET',
      url: '/api/app/event/calendar-events',
      params: { startDate, endDate },
    },
      { apiName: this.apiName, ...config });


  getList = (input: GetEventListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EventDto>>({
      method: 'GET',
      url: '/api/app/event',
      params: { filter: input.filter, type: input.type, status: input.status, artistId: input.artistId, clientId: input.clientId, startDate: input.startDate, endDate: input.endDate, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
      { apiName: this.apiName, ...config });


  queryScheduleOverview = (input: GetScheduleOverviewInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ScheduleOverviewDto>({
      method: 'POST',
      url: '/api/app/event/query-schedule-overview',
      body: input,
    },
      { apiName: this.apiName, ...config });


  update = (id: string, input: CreateUpdateEventDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventDto>({
      method: 'PUT',
      url: `/api/app/event/${id}`,
      body: input,
    },
      { apiName: this.apiName, ...config });


  updateStatus = (id: string, status: EventStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/event/${id}/status`,
      params: { status },
    },
      { apiName: this.apiName, ...config });

  checkConflict = (input: { artistId: string; startDateTime: string; endDateTime: string; excludeEventId?: string }, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/app/event/check-conflict',
      body: input,
    },
      { apiName: this.apiName, ...config });
}