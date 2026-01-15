import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';
import type { ArtistDto, CreateUpdateArtistDto, GetArtistListDto } from '../dtos/artists/models';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private restService = inject(RestService);
  apiName = 'Default';


  create = (input: CreateUpdateArtistDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArtistDto>({
      method: 'POST',
      url: '/api/app/artist',
      body: input,
    },
      { apiName: this.apiName, ...config });


  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/artist/${id}`,
    },
      { apiName: this.apiName, ...config });


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArtistDto>({
      method: 'GET',
      url: `/api/app/artist/${id}`,
    },
      { apiName: this.apiName, ...config });


  getList = (input: GetArtistListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ArtistDto>>({
      method: 'GET',
      url: '/api/app/artist',
      params: { filter: input.filter, type: input.type, isActive: input.isActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
      { apiName: this.apiName, ...config });


  update = (id: string, input: CreateUpdateArtistDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArtistDto>({
      method: 'PUT',
      url: `/api/app/artist/${id}`,
      body: input,
    },
      { apiName: this.apiName, ...config });


  uploadProposalTemplate = (artistId: string, file: File, config?: Partial<Rest.Config>) => {
    const formData = new FormData();
    formData.append('file', file);

    return this.restService.request<any, string>({
      method: 'POST',
      url: `/api/app/artist/${artistId}/proposal-template`,
      body: formData,
    },
      { apiName: this.apiName, ...config });
  }

  deleteProposalTemplate = (artistId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/artist/${artistId}/proposal-template`,
    },
      { apiName: this.apiName, ...config });
}