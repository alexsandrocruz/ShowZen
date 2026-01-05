import type { EventStatus } from '../../../entities/events/event-status.enum';
import type { EventType } from '../../../entities/events/event-type.enum';
import type { ContractType } from '../../../entities/events/contract-type.enum';
import type { NegotiationType } from '../../../entities/events/negotiation-type.enum';
import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { AvailabilityStatus } from './availability-status.enum';
export { AvailabilityStatus };

export interface CalendarEventDto {
  id?: string;
  title?: string;
  start?: string;
  end?: string;
  status?: EventStatus;
  artistName?: string;
  clientName?: string;
  locationName?: string;
  hasConflict: boolean;
}

export interface CreateUpdateEventDto {
  title: string;
  type: EventType;
  startDateTime: string;
  endDateTime?: string;
  artistId: string;
  clientId: string;
  locationId?: string;
  description?: string;
  expectedAudience?: number;
  fee?: number;
  notes?: string;
  localPartnerId?: string;
  contractType?: ContractType;
  duration?: string;
  startTime?: string;
  hasProduction: boolean;
  productionValue?: number;
  productionPercentage?: number;
  negotiationType?: NegotiationType;
  guaranteeValue?: number;
  ticketPercentage?: number;
  discountValue?: number;
  taxPercentage: number;
  taxValue: number;
  commissions: CreateUpdateEventCommissionDto[];
}

export interface CreateUpdateEventCommissionDto {
  description: string;
  value?: number;
  percentage?: number;
}

export interface CreateUpdateLocationDto {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  capacity?: string;
  notes?: string;
}

export interface EventDto extends FullAuditedEntityDto<string> {
  title?: string;
  type?: EventType;
  status?: EventStatus;
  startDateTime?: string;
  endDateTime?: string;
  artistId?: string;
  artistName?: string;
  artistHexColor?: string;
  clientId?: string;
  clientName?: string;
  locationId?: string;
  locationName?: string;
  description?: string;
  expectedAudience?: number;
  fee?: number;
  notes?: string;
  hasConflict: boolean;
  suggestedAlternativeArtistId?: string;
  suggestedAlternativeArtistName?: string;
  localPartnerId?: string;
  localPartnerName?: string;
  contractType?: ContractType;
  duration?: string;
  startTime?: string;
  hasProduction: boolean;
  productionValue?: number;
  productionPercentage?: number;
  negotiationType?: NegotiationType;
  guaranteeValue?: number;
  ticketPercentage?: number;
  discountValue?: number;
  taxPercentage: number;
  taxValue: number;
  commissions: EventCommissionDto[];
}

export interface EventCommissionDto extends EntityDto<string> {
  eventId?: string;
  description?: string;
  value?: number;
  percentage?: number;
}

export interface EventSummaryDto {
  id?: string;
  title?: string;
  startDateTime?: string;
  endDateTime?: string;
  artistId?: string;
  artistName?: string;
  clientId?: string;
  clientName?: string;
  artistHexColor?: string;
  locationId?: string;
  locationName?: string;
  status?: EventStatus;
  type?: EventType;
  fee?: number;
  hasConflict: boolean;
  expectedAudience?: number;
  duration?: string;
  startTime?: string;
  durationHours: number;
}

export interface GetEventListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  type?: EventType;
  status?: EventStatus;
  artistId?: string;
  clientId?: string;
  startDate?: string;
  endDate?: string;
}

export interface GetLocationListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface GetScheduleOverviewInput extends PagedAndSortedResultRequestDto {
  startDate?: string;
  endDate?: string;
  artistIds: string[];
  statuses?: EventStatus[];
  types?: EventType[];
}

export interface LocationDto extends EntityDto<string> {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  capacity?: string;
  notes?: string;
}

export interface ScheduleOverviewDto {
  events: EventSummaryDto[];
  dailyAvailability?: Record<string, AvailabilityStatus>;
  totalCount: number;
  conflictsCount: number;
  statistics: ScheduleStatisticsDto;
}

export interface ScheduleStatisticsDto {
  confirmedEvents: number;
  proposalEvents: number;
  leadEvents: number;
  totalConfirmedRevenue: number;
  totalProposalRevenue: number;
}
