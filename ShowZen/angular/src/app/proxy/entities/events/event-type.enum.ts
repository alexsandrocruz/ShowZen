import { mapEnumToOptions } from '@abp/ng.core';

export enum EventType {
  Show = 1,
  Lecture = 2,
  Workshop = 3,
  TvAppearance = 4,
  RadioAppearance = 5,
  PodcastAppearance = 6,
  InstitutionalEvent = 7,
  Corporate = 8,
  Training = 9,
  Other = 99,
}

export const eventTypeOptions = mapEnumToOptions(EventType);
