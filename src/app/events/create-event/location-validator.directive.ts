import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): { [key: string]: any} {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    // This is because onlineUrl is a sibling of location where the directive is specified, so
    // to point to it we have to access the root of the formGroup.
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

    if ((addressControl && addressControl.value && cityControl &&
      cityControl.value && countryControl && countryControl.value)
    || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {appLocationValidator: false};
    }
  }

}
