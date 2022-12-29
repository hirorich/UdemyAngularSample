import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from 'src/app/sample/number-list/number-list.component';
import { Layout1Component } from 'src/app/layout/layout1/layout1.component';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [
    CommonModule,
    NumberListComponent,
    Layout1Component
  ],
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {

}
