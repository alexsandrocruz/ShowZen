import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
    NgxDatatableListDirective,
    ModalCloseDirective,
    ModalComponent
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
        NgxDatatableListDirective,
        NgxDatatableListDirective,
        ModalComponent
    ],
    providers: [ListService],
    templateUrl: './artists.component.html',
    styleUrl: './artists.component.scss'
})
export class ArtistsComponent implements OnInit {
    artists: PagedResultDto<ArtistDto> = { items: [], totalCount: 0 };

    isModalOpen = false;
    selectedArtist = {} as ArtistDto;

    form!: FormGroup;

    artistTypes = [
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
        private confirmation: ConfirmationService
    ) { }

    ngOnInit() {
        this.buildForm();
        this.buildFilterForm();

        const artistStreamCreator = (query: GetArtistListDto) => this.artistService.getList(query);

        this.list.hookToQuery(artistStreamCreator).subscribe((response) => {
            this.artists = response;
        });
    }

    buildForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            type: [null, Validators.required],
            biography: ['', [Validators.required, Validators.maxLength(2000)]],
            instagramHandle: ['', Validators.maxLength(100)],
            websiteUrl: ['', Validators.maxLength(500)]
        });
    }

    buildFilterForm() {
        this.filterForm = this.fb.group({
            filter: [''],
            type: [null],
            isActive: [null]
        });

        this.filterForm.valueChanges.subscribe(() => {
            this.list.filter = this.filterForm.value.filter;
            this.list.get();
        });
    }

    createArtist() {
        this.selectedArtist = {} as ArtistDto;
        this.form.reset();
        this.isModalOpen = true;
    }

    editArtist(id: string) {
        this.artistService.get(id).subscribe((artist) => {
            this.selectedArtist = artist;
            this.form.patchValue(artist);
            this.isModalOpen = true;
        });
    }

    save() {
        if (this.form.invalid) {
            return;
        }

        const request = this.selectedArtist.id
            ? this.artistService.update(this.selectedArtist.id, this.form.value)
            : this.artistService.create(this.form.value);

        request.subscribe(() => {
            this.isModalOpen = false;
            this.form.reset();
            this.list.get();
        });
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
