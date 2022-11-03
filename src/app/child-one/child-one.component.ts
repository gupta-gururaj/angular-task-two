import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  allCarBrands = ['Volvo', 'Ford', 'Toyota', 'KIA', 'Nisaan'];

  @Output() dropdownSelect = new EventEmitter<{ dropdownValue: string }>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(selectInput: string) {
    this.dropdownSelect.emit({
      dropdownValue: selectInput,
    });
  }
}
