import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WishItem } from '../shared/models/wishItems';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn React', true),
    new WishItem('Find a senzu bean'),
  ];

  listFilter: String = '0';
  newWishText = '';
  title = 'wishlist';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;

    switch (value) {
      case '0':
        return this.items;
      case '1':
        return this.items.filter((item) => item.isComplete);
      case '2':
        return this.items.filter((item) => !item.isComplete);
      default:
        return this.items;
    }
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
