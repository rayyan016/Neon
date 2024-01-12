import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  listFilter: String = '0';

  changeFilter(value: any) {
    this.filter.emit(this.listFilter);
  }
}
