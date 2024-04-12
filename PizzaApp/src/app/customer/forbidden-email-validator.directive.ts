import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomerValidators } from './customer-validators';

@Directive({
  selector: '[appForbiddenEmailValidator]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenEmailValidatorDirective,
    multi: true
  }]
})
export class ForbiddenEmailValidatorDirective implements Validator {
  private _onChange: (() => void) | undefined;

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return CustomerValidators.forbiddenEmailValidator("@irian.ro")(control);
  }

}
