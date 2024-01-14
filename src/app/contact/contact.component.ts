import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  senderNameControl = new FormControl();
  senderEmailControl = new FormControl();
  senderMessageControl = new FormControl();

  submitForm() {
    if (this.senderNameControl.dirty) {
      console.log('Change');
    }
  }
}
