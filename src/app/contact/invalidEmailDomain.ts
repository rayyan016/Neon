import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createInvalidDomainValidator(hosts: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value?.toLowerCase();

    if (!value) {
      return null;
    }

    const matches: boolean = hosts.some(
      (host) => value.indexOf(`@${host}`) > -1
    );
    return matches ? { invalidEmailDomain: true } : null;
  };
}
