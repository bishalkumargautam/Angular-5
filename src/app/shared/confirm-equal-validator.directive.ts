import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: confirmEqualValidator,
        multi: true
    }]
})



export class confirmEqualValidator implements Validator {

    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('ConfirmPassword');


        if(passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value){
            return {'notEqual':true};
        }

        return null;
    }
}