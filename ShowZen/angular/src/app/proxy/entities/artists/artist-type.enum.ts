import { mapEnumToOptions } from '@abp/ng.core';

export enum ArtistType {
  Singer = 0,
  Musician = 1,
  Speaker = 2,
  Teacher = 3,
  Activist = 4,
  Influencer = 5,
  Actor = 6,
  Other = 99,
}

export const artistTypeOptions = mapEnumToOptions(ArtistType);
