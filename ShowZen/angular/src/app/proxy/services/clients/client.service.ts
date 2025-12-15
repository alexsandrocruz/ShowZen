import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { ClientDto, CreateUpdateClientDto, GetClientListDto } from '../dtos/clients/models';
import type { LeadStatus } from '../../entities/clients/lead-status.enum';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  create = (input: CreateUpdateClientDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ClientDto>({
      method: 'POST',
      url: '/api/app/client',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ClientDto>({
      method: 'GET',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetClientListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ClientDto>>({
      method: 'GET',
      url: '/api/app/client',
      params: { filter: input.filter, type: input.type, leadStatus: input.leadStatus, isActive: input.isActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateClientDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ClientDto>({
      method: 'PUT',
      url: `/api/app/client/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateLeadStatus = (id: string, newStatus: LeadStatus, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ClientDto>({
      method: 'PUT',
      url: `/api/app/client/${id}/lead-status`,
      params: { newStatus },
    },
    { apiName: this.apiName,...config });
}