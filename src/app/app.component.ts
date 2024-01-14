import { Component, OnInit } from '@angular/core';

import { WishModule } from './wish/wish.module';
import { WishItem } from '../shared/models/wishItems';

import { EventService } from './../shared/services/EventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filter: any;
}
