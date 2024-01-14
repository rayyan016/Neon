import { AbstractControl, ValidationErrors } from '@angular/forms';

export function invalidEmailDomain(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value?.toLowerCase();
  const hosts = ['gmail.com', 'hotmail.com'];

  if (!value) {
    return null;
  }

  const matches: boolean = hosts.some((host) => value.indexOf(`@${host}`) > -1);
  return matches ? { invalidEmailDomain: true } : null;
}
