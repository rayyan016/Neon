import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WishItem } from '../shared/models/wishItems';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import { EventService } from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn React', true),
    new WishItem('Find a senzu bean'),
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {

      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  filter: any;
}
