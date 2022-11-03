import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myOption = '';

  onSelectAdded(object: { dropdownValue: string }) {
    this.myOption = object.dropdownValue;
  }
}
