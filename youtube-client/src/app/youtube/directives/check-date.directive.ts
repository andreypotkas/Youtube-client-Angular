import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkDateValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const { value } = control;

    if (!value) {
      return null;
    }

    const passwordValid = Date.now() - Date.parse(value);

    return passwordValid > 0 ? { correctDate: true } : null;
  };
}
