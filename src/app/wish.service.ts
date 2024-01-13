import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItems';

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
    let options = this.getStandarOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });

    return this.http.get('assets/wishes.json', options);
  }

  private addWish(wish: WishItem) {
    let options = this.getStandarOptions();
    options.headers = options.headers.set('Authorization', 'Bearer token');

    this.http.post('assets/wishes.json', wish, options);
  }
}
