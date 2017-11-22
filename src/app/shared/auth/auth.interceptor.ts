import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { environment } from 'environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorage.retrieve('authenticationToken') ||
      this.sessionStorage.retrieve('authenticationToken');

    request = request.clone({
      url: environment.origin + request.url,
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(request);
  }
}
