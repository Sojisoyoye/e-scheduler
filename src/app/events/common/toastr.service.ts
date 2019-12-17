import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');
export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}


// Injection token allows us to create a key we can pass into our component like a service
// to use as a dependency injector withput creating a class, the injection token's job is to create a token
// used for the dependency injection registry in order to find the instance of the service we want
