import { mapEnumToOptions } from '@abp/ng.core';

export enum LeadStatus {
  New = 1,
  Contacted = 2,
  Qualified = 3,
  ProposalSent = 4,
  Negotiation = 5,
  Won = 6,
  Lost = 7,
}

export const leadStatusOptions = mapEnumToOptions(LeadStatus);
