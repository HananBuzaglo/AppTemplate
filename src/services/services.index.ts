import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Interceptors/auth-interceptor/auth.interceptor';
import { LOCALE_ID } from '@angular/core';

export const SERVICES = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }, {
        provide: LOCALE_ID,
        useValue: 'he'
    }
];
