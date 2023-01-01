import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnResizeDirective, BorderBoxSize } from '../on-resize.directive';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    OnResizeDirective
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @HostBinding('style.--side-width.px')
  @Input()
  sideWidth: number = 0;

  @HostBinding('style.--height-head.px')
  heightHead: number = 0;

  @HostBinding('style.--height-foot.px')
  heightFoot: number = 0;

  onResizeHead(boxSize: BorderBoxSize) {
    console.log(`onResizeHead: ${boxSize.height}`);
    this.heightHead = boxSize.height;
  }

  onResizeFoot(boxSize: BorderBoxSize) {
    console.log(`onResizeFoot: ${boxSize.height}`);
    this.heightFoot = boxSize.height;
  }

}
