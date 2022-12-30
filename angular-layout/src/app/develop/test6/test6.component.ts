import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSize2Component } from 'src/app/sample/font-size2/font-size2.component';

@Component({
  selector: 'app-test6',
  standalone: true,
  imports: [
    CommonModule,
    FontSize2Component
  ],
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component {

}
