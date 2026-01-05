import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var google: any;

export interface PlaceResult {
    formattedAddress: string;
    lat: number;
    lng: number;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
}

@Component({
    selector: 'app-google-places-autocomplete',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="google-places-wrapper">
      <input
        #searchInput
        type="text"
        class="form-control"
        [placeholder]="placeholder"
        [(ngModel)]="inputValue"
        (input)="onInputChange()"
      />
    </div>
  `,
    styles: [`
    .google-places-wrapper {
      position: relative;
    }
  `]
})
export class GooglePlacesAutocompleteComponent implements OnInit {
    @ViewChild('searchInput', { static: true }) searchInput!: ElementRef<HTMLInputElement>;

    @Input() placeholder: string = 'Buscar endereço...';
    @Input() value: string = '';
    @Output() placeSelected = new EventEmitter<PlaceResult>();
    @Output() valueChange = new EventEmitter<string>();

    inputValue: string = '';
    private autocomplete: any;

    constructor(private ngZone: NgZone) { }

    ngOnInit(): void {
        this.inputValue = this.value;
        this.initAutocomplete();
    }

    private initAutocomplete(): void {
        if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
            console.warn('Google Maps API not loaded yet. Autocomplete disabled.');
            return;
        }

        this.autocomplete = new google.maps.places.Autocomplete(
            this.searchInput.nativeElement,
            {
                types: ['geocode', 'establishment'],
                componentRestrictions: { country: 'br' }
            }
        );

        this.autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
                const place = this.autocomplete.getPlace();
                if (!place.geometry) {
                    return;
                }

                const result: PlaceResult = {
                    formattedAddress: place.formatted_address,
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };

                // Extract address components
                if (place.address_components) {
                    for (const component of place.address_components) {
                        const type = component.types[0];
                        if (type === 'administrative_area_level_2') {
                            result.city = component.long_name;
                        } else if (type === 'administrative_area_level_1') {
                            result.state = component.short_name;
                        } else if (type === 'country') {
                            result.country = component.long_name;
                        } else if (type === 'postal_code') {
                            result.zipCode = component.long_name;
                        }
                    }
                }

                this.inputValue = place.formatted_address;
                this.valueChange.emit(this.inputValue);
                this.placeSelected.emit(result);
            });
        });
    }

    onInputChange(): void {
        this.valueChange.emit(this.inputValue);
    }
}
