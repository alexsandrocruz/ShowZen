import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import { Observable } from 'rxjs';

export interface ProposalDto {
    id: string;
    eventId: string;
    uniqueToken: string;
    generatedAt: string;
    expiresAt: string;
    viewCount: number;
    pdfPath?: string;
    status: ProposalStatus;
    eventTitle: string;
    artistName: string;
    clientName: string;
}

export enum ProposalStatus {
    Draft = 0,
    Sent = 1,
    Accepted = 2,
    Rejected = 3
}

export interface CreateProposalInput {
    eventId: string;
}

export interface TrackProposalViewInput {
    token: string;
    ipAddress?: string;
    userAgent?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProposalService {
    constructor(private rest: RestService) { }

    generateProposal(input: CreateProposalInput): Observable<ProposalDto> {
        return this.rest.request<CreateProposalInput, ProposalDto>({
            method: 'POST',
            url: '/api/app/proposal/generate-proposal',
            body: input
        });
    }

    getProposalByToken(token: string): Observable<ProposalDto> {
        return this.rest.request<void, ProposalDto>({
            method: 'GET',
            url: `/api/app/proposal/proposal-by-token/${token}`
        });
    }

    trackView(input: TrackProposalViewInput): Observable<void> {
        return this.rest.request<TrackProposalViewInput, void>({
            method: 'POST',
            url: '/api/app/proposal/track-view',
            body: input
        });
    }

    getProposalUrl(token: string): string {
        // Assuming the app is running on the same domain
        return `${window.location.origin}/proposals/${token}`;
    }

    getPdfUrl(token: string): string {
        return `${window.location.origin}/proposals/${token}.pdf`;
    }
}
