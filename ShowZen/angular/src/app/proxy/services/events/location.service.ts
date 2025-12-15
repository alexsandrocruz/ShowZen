import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { CreateUpdateLocationDto, GetLocationListDto, LocationDto } from '../dtos/events/models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  create = (input: CreateUpdateLocationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>({
      method: 'POST',
      url: '/api/app/location',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/location/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>({
      method: 'GET',
      url: `/api/app/location/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetLocationListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LocationDto>>({
      method: 'GET',
      url: '/api/app/location',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateLocationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>({
      method: 'PUT',
      url: `/api/app/location/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
}