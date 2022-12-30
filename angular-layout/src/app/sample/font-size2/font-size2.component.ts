import { FormsModule } from '@angular/forms';
import { Component, ElementRef, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font-size2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './font-size2.component.html',
  styleUrls: ['./font-size2.component.css']
})
export class FontSize2Component {

  value: number = 30;

  constructor(
    private el: ElementRef
  ) {
  }

  get fontSize(): string {
    return `${this.value}px`;
  }

  bindCssCustomProp(event: number): void {
    this.el.nativeElement.style.setProperty('--font-size', `${this.value}px`);
  }

}
