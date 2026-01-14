import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ArtistImageService {
    private restService = inject(RestService);
    apiName = 'Default';

    uploadLogo = (artistId: string, file: Blob, config?: Partial<Rest.Config>) => {
        const formData = new FormData();
        formData.append('input', file);

        return this.restService.request<any, void>({
            method: 'POST',
            url: `/api/app/artist-image/${artistId}/logo`,
            body: formData,
        },
            { apiName: this.apiName, ...config });
    };

    uploadBanner = (artistId: string, file: Blob, config?: Partial<Rest.Config>) => {
        const formData = new FormData();
        formData.append('input', file);

        return this.restService.request<any, void>({
            method: 'POST',
            url: `/api/app/artist-image/${artistId}/banner`,
            body: formData,
        },
            { apiName: this.apiName, ...config });
    };

    getLogoUrl = (artistId: string) => `/api/app/artist-image/${artistId}/logo`;
    getBannerUrl = (artistId: string) => `/api/app/artist-image/${artistId}/banner`;
}
