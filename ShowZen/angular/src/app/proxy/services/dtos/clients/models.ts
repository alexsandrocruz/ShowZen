import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { ClientType } from '../../../entities/clients/client-type.enum';
import type { LeadStatus } from '../../../entities/clients/lead-status.enum';

export interface ClientDto extends FullAuditedEntityDto<string> {
  name?: string;
  type?: ClientType;
  document?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  notes?: string;
  isActive: boolean;
  leadStatus?: LeadStatus;
  firstContactDate?: string;
  lastContactDate?: string;
}

export interface CreateUpdateClientDto {
  name: string;
  type: ClientType;
  document?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  notes?: string;
}

export interface GetClientListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  type?: ClientType;
  leadStatus?: LeadStatus;
  isActive?: boolean;
}
