import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor() {
  }

  username = 'cj92';
  password = 'cj';
  headerBasic = '';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.headerBasic = 'Bearer ' + sessionStorage.getItem('token');
    if (sessionStorage.getItem('token') !== null) {
      req = req.clone({
          setHeaders: {
            Authorization: this.headerBasic
          }
        }
      );
    }
    return next.handle(req);
  }

}
