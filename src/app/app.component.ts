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
  visibleItems: WishItem[] = this.items;
  newWishText = '';
  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value: any) {
    switch (value) {
      case '0':
        this.visibleItems = this.items;
        break;
      case '1':
        this.visibleItems = this.items.filter((item) => item.isComplete);
        break;
      case '2':
        this.visibleItems = this.items.filter((item) => !item.isComplete);
        break;
      default:
        this.visibleItems = this.items;
        break;
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
