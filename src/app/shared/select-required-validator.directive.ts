import { Directive,Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[appSelectorValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: selectvalidationdirective,
        multi: true
    }]
})

export class selectvalidationdirective implements Validator  {
   @Input('appSelectorValidator') defaultValue:string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }
}