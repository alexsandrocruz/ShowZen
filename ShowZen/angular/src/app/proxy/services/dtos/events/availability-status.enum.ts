import { mapEnumToOptions } from '@abp/ng.core';

export enum AvailabilityStatus {
  Free = 0,
  Partial = 1,
  Busy = 2,
}

export const availabilityStatusOptions = mapEnumToOptions(AvailabilityStatus);
