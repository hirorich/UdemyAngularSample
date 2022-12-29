import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from 'src/app/sample/number-list/number-list.component';
import { Layout4Component } from 'src/app/layout/layout4/layout4.component';

@Component({
  selector: 'app-test4',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NumberListComponent,
    Layout4Component
  ],
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {

  sideWidth: number = 200;

}
