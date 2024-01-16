import { Component } from '@angular/core';

import { WishItem } from '../../shared/models/wishItems';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import { EventService } from '../../shared/services/EventService';
import { WishService } from '../wish/wish.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
      this.saveWishlistToLocalStorage();
    });
  }

  ngOnInit(): void {
    this.items = this.wishService.getWishes();
    if (this.items.length === 0) {
      this.wishService.getWishesFromJson().subscribe(
        (data: any) => {
          this.items = data;
        },
        (error: any) => {
          alert(error.message);
        }
      );
    }
  }

  filter: any;

  addWish(wish: WishItem): void {
    if (!wish.wishText) {
      return;
    }
    this.items.push(wish);
    this.saveWishlistToLocalStorage();
  }

  private saveWishlistToLocalStorage(): void {
    // Convert the array to a JSON string
    const wishlistJson = JSON.stringify(this.items);

    // Save the JSON string to local storage
    localStorage.setItem('wishlist', wishlistJson);
  }
}
