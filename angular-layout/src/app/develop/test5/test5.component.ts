import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeComponent } from 'src/app/sample/font-size/font-size.component';

@Component({
  selector: 'app-test5',
  standalone: true,
  imports: [
    CommonModule,
    FontSizeComponent
  ],
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component {

}
