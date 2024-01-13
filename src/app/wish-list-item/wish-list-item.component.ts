import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishItem } from '../../shared/models/wishItems';

import events from './../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get wishTextClass() {
    return this.wish.isComplete ? ['line-through', 'text-emerald-400'] : [];
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
