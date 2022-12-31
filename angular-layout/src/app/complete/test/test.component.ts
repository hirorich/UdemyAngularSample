import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { OnResizeDirective, BorderBoxSize } from '../on-resize.directive';
import { NumberListComponent } from 'src/app/sample/number-list/number-list.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LayoutComponent,
    OnResizeDirective,
    NumberListComponent
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  sideWidth: number = 200;
  heightHead: number = 0;
  heightFoot: number = 0;

  onResizeHead(boxSize: BorderBoxSize) {
    this.heightHead = boxSize.height;
  }

  onResizeFoot(boxSize: BorderBoxSize) {
    this.heightFoot = boxSize.height;
  }

}
