import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from 'src/app/sample/number-list/number-list.component';
import { Layout3Component } from 'src/app/layout/layout3/layout3.component';

@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NumberListComponent,
    Layout3Component
  ],
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {

  sideWidth: number = 200;

}
