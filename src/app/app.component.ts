import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '';

  onSelectAdded(object: {dropdownValue: string}) {
    this.value = object.dropdownValue;
  }
}
