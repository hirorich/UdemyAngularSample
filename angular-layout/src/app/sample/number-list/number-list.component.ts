import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent  {

  @Input() listLength: number = 0;

  constructor() {}

  get list(): any[] {
    return [...Array(this.listLength)];
  }

}
