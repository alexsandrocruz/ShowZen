import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
    ListService,
    PagedResultDto,
    LocalizationPipe,
    PermissionDirective
} from '@abp/ng.core';
import {
    ConfirmationService,
    Confirmation,
    NgxDatatableDefaultDirective,
    NgxDatatableListDirective
} from '@abp/ng.theme.shared';
import { PageModule } from '@abp/ng.components/page';
import { ArtistService } from '../proxy/services/artists/artist.service';
import { ArtistDto, GetArtistListDto } from '../proxy/services/dtos/artists/models';
import { ArtistType } from '../proxy/entities/artists/artist-type.enum';

@Component({
    selector: 'app-artists',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        NgxDatatableModule,
        PageModule,
        LocalizationPipe,
        PermissionDirective,
        NgxDatatableDefaultDirective,
        NgxDatatableListDirective
    ],
    providers: [ListService],
    templateUrl: './artists.component.html',
    styleUrl: './artists.component.scss'
})
export class ArtistsComponent implements OnInit {
    artists: PagedResultDto<ArtistDto> = { items: [], totalCount: 0 };
    viewMode: 'table' | 'grid' = 'grid';

    artistTypes = [
        { value: ArtistType.Singer, label: 'Singer' },
        { value: ArtistType.Musician, label: 'Musician' },
        { value: ArtistType.Speaker, label: 'Speaker' },
        { value: ArtistType.Teacher, label: 'Teacher' },
        { value: ArtistType.Activist, label: 'Activist' },
        { value: ArtistType.Influencer, label: 'Influencer' },
        { value: ArtistType.Actor, label: 'Actor' },
        { value: ArtistType.Other, label: 'Other' }
    ];

    filterForm!: FormGroup;

    constructor(
        public readonly list: ListService<GetArtistListDto>,
        private artistService: ArtistService,
        private fb: FormBuilder,
        private router: Router,
        private confirmation: ConfirmationService
    ) { }

    ngOnInit() {
        this.buildFilterForm();

        const artistStreamCreator = (query: GetArtistListDto) => {
            return this.artistService.getList({
                ...query,
                ...this.filterForm.value
            });
        };

        this.list.hookToQuery(artistStreamCreator).subscribe((response) => {
            this.artists = response;
        });
    }

    buildFilterForm() {
        this.filterForm = this.fb.group({
            filter: [''],
            type: [null],
            isActive: [null]
        });

        this.filterForm.valueChanges.subscribe(() => {
            this.list.get();
        });
    }

    createArtist() {
        this.router.navigate(['/artists/new']);
    }

    editArtist(id: string) {
        this.router.navigate(['/artists/edit', id]);
    }

    delete(id: string) {
        this.confirmation.warn('::AreYouSure', '::AreYouSureToDelete').subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.artistService.delete(id).subscribe(() => this.list.get());
            }
        });
    }

    getArtistTypeName(type: ArtistType): string {
        return ArtistType[type];
    }
}
