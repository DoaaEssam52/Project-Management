import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl='https://upskilling-egypt.com:3003/api/v1/';
    const token = localStorage.getItem('userToken')

    let newRequest = request.clone({
      url:baseUrl+request.url,
      setHeaders:{
        'Authorization':`${token}`
      }
    })

    // return the new request after modification 
    return next.handle(newRequest);
  }
}
