import { FormsModule } from '@angular/forms';
import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font-size',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent {

  @HostBinding('style.--font-size.px')
  value: number = 30;

  get fontSize(): string {
    return `${this.value}px`;
  }
}
