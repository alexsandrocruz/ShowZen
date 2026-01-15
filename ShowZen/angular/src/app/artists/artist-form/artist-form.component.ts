import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizationPipe } from '@abp/ng.core';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { ArtistService } from '../../proxy/services/artists/artist.service';
import { ArtistDto } from '../../proxy/services/dtos/artists/models';
import { ArtistType, artistTypeOptions } from '../../proxy/entities/artists/artist-type.enum';
import { ArtistImageService } from '../../proxy/services/artists/artist-image.service';
import { forkJoin, of, concat } from 'rxjs';
import { switchMap, toArray } from 'rxjs/operators';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
    selector: 'app-artist-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LocalizationPipe
    ],
    templateUrl: './artist-form.component.html',
    styleUrl: './artist-form.component.scss'
})
export class ArtistFormComponent implements OnInit {
    form!: FormGroup;
    artistId: string | null = null;
    artist: ArtistDto | null = null;
    isEditMode = false;
    saving = false;

    logoFile: File | null = null;
    bannerFile: File | null = null;
    logoPreview: string | null = null;
    bannerPreview: string | null = null;
    templateFile: File | null = null;
    deletingTemplate = false;

    artistTypes = artistTypeOptions;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private artistService: ArtistService,
        private artistImageService: ArtistImageService,
        private confirmation: ConfirmationService,
        private toaster: ToasterService
    ) { }

    ngOnInit() {
        this.buildForm();

        this.route.params.subscribe(params => {
            this.artistId = params['id'];
            if (this.artistId) {
                this.isEditMode = true;
                this.loadArtist();
            }
        });
    }

    buildForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            type: [null, Validators.required],
            biography: ['', [Validators.required, Validators.maxLength(2000)]],
            instagramHandle: ['', Validators.maxLength(100)],
            websiteUrl: ['', Validators.maxLength(500)],
            logoUrl: [null],
            bannerUrl: [null],
            hexColor: ['#000000'],
            defaultTaxPercentage: [0, [Validators.min(0), Validators.max(100)]]
        });
    }

    loadArtist() {
        if (!this.artistId) return;

        this.artistService.get(this.artistId).subscribe((artist) => {
            this.artist = artist;
            this.form.patchValue(artist);
            this.logoPreview = artist.logoUrl || null;
            this.bannerPreview = artist.bannerUrl || null;
        });
    }

    onLogoSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.logoFile = file;
            const reader = new FileReader();
            reader.onload = () => this.logoPreview = reader.result as string;
            reader.readAsDataURL(file);
        }
    }

    onBannerSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.bannerFile = file;
            const reader = new FileReader();
            reader.onload = () => this.bannerPreview = reader.result as string;
            reader.readAsDataURL(file);
        }
    }

    onTemplateSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            if (file.type !== 'application/pdf') {
                this.toaster.error('Apenas arquivos PDF são permitidos');
                return;
            }
            if (file.size > 10 * 1024 * 1024) {
                this.toaster.error('O arquivo deve ter no máximo 10MB');
                return;
            }
            this.templateFile = file;
        }
    }

    deleteTemplate() {
        if (!this.artistId) return;

        this.confirmation.warn(
            '::AreYouSure',
            'Tem certeza que deseja remover o PDF de apresentação?'
        ).subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.deletingTemplate = true;
                this.artistService.deleteProposalTemplate(this.artistId!).subscribe({
                    next: () => {
                        this.deletingTemplate = false;
                        if (this.artist) {
                            this.artist.proposalTemplateUrl = null;
                        }
                        this.toaster.success('PDF removido com sucesso');
                    },
                    error: () => {
                        this.deletingTemplate = false;
                        this.toaster.error('Erro ao remover PDF');
                    }
                });
            }
        });
    }

    save() {
        if (this.form.invalid) {
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key)?.markAsTouched();
            });
            return;
        }

        this.saving = true;

        const request = this.isEditMode && this.artistId
            ? this.artistService.update(this.artistId, this.form.value)
            : this.artistService.create(this.form.value);

        request.pipe(
            switchMap((artist: ArtistDto) => {
                const uploads = [];
                if (this.logoFile) {
                    uploads.push(this.artistImageService.uploadLogo(artist.id, this.logoFile));
                }
                if (this.bannerFile) {
                    uploads.push(this.artistImageService.uploadBanner(artist.id, this.bannerFile));
                }
                if (this.templateFile) {
                    uploads.push(this.artistService.uploadProposalTemplate(artist.id, this.templateFile));
                }
                return uploads.length > 0 ? concat(...uploads).pipe(toArray()) : of(null);
            })
        ).subscribe({
            next: () => {
                this.saving = false;
                this.toaster.success(
                    this.isEditMode ? 'Artista atualizado com sucesso' : 'Artista criado com sucesso'
                );
                this.router.navigate(['/artists']);
            },
            error: () => {
                this.saving = false;
                this.toaster.error('Erro ao salvar artista');
            }
        });
    }

    cancel() {
        this.router.navigate(['/artists']);
    }
}
