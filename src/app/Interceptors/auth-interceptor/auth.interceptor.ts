import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

// import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /// Full URI Backend and Route.
    // const uri = `https://verint.yourtalents.me/${req.url}`;
    const uri = 'Api Server';

    // Get the auth token from the service.
    const authToken = 'Get Token from AuthService';

    /// Clone the request to add the new header.
    let authReq = req.clone({
      url: uri,
      setHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if (authToken) {
      authReq = req.clone({
        url: uri,
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${authToken}`
        }
      });
    }

      // send cloned request with header to the next handler.
      return next.handle(authReq);
      // ToDo: handle errors
      // Todo: Send to logService
  }
}

