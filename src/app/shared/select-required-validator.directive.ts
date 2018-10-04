import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appSelectorValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: selectvalidationdirective,
        multi: true
    }]

})

export class selectvalidationdirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    }
}