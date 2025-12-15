import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { ArtistType } from '../../../entities/artists/artist-type.enum';

export interface ArtistDto extends FullAuditedEntityDto<string> {
  name?: string;
  type?: ArtistType;
  biography?: string;
  photoUrl?: string;
  isActive: boolean;
  instagramHandle?: string;
  websiteUrl?: string;
  specialties: ArtistSpecialtyDto[];
}

export interface ArtistSpecialtyDto {
  id?: string;
  name?: string;
  description?: string;
}

export interface CreateUpdateArtistDto {
  name: string;
  type: ArtistType;
  biography: string;
  instagramHandle?: string;
  websiteUrl?: string;
}

export interface GetArtistListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  type?: ArtistType;
  isActive?: boolean;
}
