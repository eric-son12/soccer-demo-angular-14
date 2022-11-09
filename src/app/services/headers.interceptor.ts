import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = localStorage.getItem('id_token') || '';
    if (idToken) {
      const requestClone = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken)
      });
      return next.handle(requestClone);
    } else {
      return next.handle(request);
    }
  }
}
