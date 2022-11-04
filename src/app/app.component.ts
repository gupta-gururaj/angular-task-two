import { Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('nameRef') inputForm?: ElementRef;

  myOption = '';

  setSelectedOption(object: any) {
    this.myOption = object;
  }

  ngAfterViewInit() {
    this.inputForm?.nativeElement.focus() //focus on input textbox whenever page loads
  }

  onDropdownSelected(object: { dropdownValue: string }) {
    this.myOption = object.dropdownValue;
  }
}
