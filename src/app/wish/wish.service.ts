import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { WishItem } from '../../shared/models/wishItems';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandarOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getWishes() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  getWishesFromJson() {
    let options = this.getStandarOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });

    return this.http
      .get('assets/wishes.json', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'An issue occurred with the network or client: ',
        error.error
      );
    } else {
      console.error('Server error: ', error.error);
    }

    return throwError(
      () => new Error('Cannot retrieve wishes. Please try again later.')
    );
  }

  private addWish(wish: WishItem) {
    let options = this.getStandarOptions();
    options.headers = options.headers.set('Authorization', 'Bearer token');

    this.http.post('assets/wishes.json', wish, options);
  }
}
