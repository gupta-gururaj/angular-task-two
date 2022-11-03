import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myOption = '';

  setSelectedOption(object: any) {
    this.myOption = object;
  }

  onSelectAdded(object: { dropdownValue: string }) {
    this.myOption = object.dropdownValue;
  }
}
