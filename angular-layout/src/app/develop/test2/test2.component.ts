import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from 'src/app/sample/number-list/number-list.component';
import { Layout2Component } from 'src/app/layout/layout2/layout2.component';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NumberListComponent,
    Layout2Component
  ],
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  sideWidth: number = 200;

}
