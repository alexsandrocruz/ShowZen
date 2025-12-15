import { mapEnumToOptions } from '@abp/ng.core';

export enum EventStatus {
  Lead = 1,
  ProposalSent = 2,
  Confirmed = 3,
  InProgress = 4,
  Completed = 5,
  Cancelled = 6,
  Lost = 7,
  Negotiation = 8,
}

export const eventStatusOptions = mapEnumToOptions(EventStatus);
