import {
    Directive,
    ElementRef,
    forwardRef,
    HostListener
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

@Directive({
    selector: '[percentageInput]',
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PercentageInputDirective),
            multi: true
        }
    ]
})
export class PercentageInputDirective implements ControlValueAccessor {

    private onChange = (_: any) => { };
    private onTouched = () => { };
    private value = 0;

    constructor(private el: ElementRef<HTMLInputElement>) { }

    writeValue(value: number | null): void {
        this.value = value ?? 0;
        this.format();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;

        // Remove tudo que não for número
        const digits = input.value.replace(/\D/g, '');

        // Trata decimas (ex: 1234 -> 12.34)
        this.value = Number(digits) / 100;

        this.onChange(this.value);
        this.format();
    }

    @HostListener('blur')
    onBlur(): void {
        this.onTouched();
        this.format();
    }

    private format(): void {
        const formatted = this.value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        this.el.nativeElement.value = `${formatted}%`;
    }
}
