import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChildOneComponent implements OnInit {
  allCarBrands = ['Volvo', 'Ford', 'Toyota', 'KIA', 'Nisaan'];

  selectedOption = this.allCarBrands[3];

  @Output() dropdownSelect = new EventEmitter<{ dropdownValue: string }>();

  @Output() selectedOptionValue = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.selectedOptionValue.emit(this.selectedOption);
  }

  onSelect(selectInput: string) {
    this.dropdownSelect.emit({
      dropdownValue: selectInput,
    });
  }
}
