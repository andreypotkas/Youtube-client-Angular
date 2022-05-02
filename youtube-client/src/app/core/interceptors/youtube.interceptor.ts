import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  private API_KEY = 'AIzaSyA140IZ_dECq0JYl4j0eF7Z_bBzBgf6UVA';
  private BASE_URL = 'https://www.googleapis.com/youtube/v3';
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: `${this.BASE_URL}/${request.url}`,
        setParams: {
          key: this.API_KEY,
        },
      }),
    );
  }
}
