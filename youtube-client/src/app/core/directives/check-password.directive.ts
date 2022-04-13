import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkPasswordValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const { value } = control;

    if (!value) {
      return null;
    }
    const hasSymbol = /[@!#?]+/.test(value);

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSymbol;

    return !passwordValid ? { correctPassword: true } : null;
  };
}
