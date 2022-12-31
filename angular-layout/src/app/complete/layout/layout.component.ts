import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @HostBinding('style.--side-width.px')
  @Input()
  sideWidth: number = 0;

  @HostBinding('style.--height-head.px')
  @Input()
  heightHead: number = 0;

  @HostBinding('style.--height-foot.px')
  @Input()
  heightFoot: number = 0;

}
