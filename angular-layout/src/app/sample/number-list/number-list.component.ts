import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [CommonModule],
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
