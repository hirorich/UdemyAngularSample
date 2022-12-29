import { AfterViewInit, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeObserverService } from 'src/app/service/resize-observer.service';

@Component({
  selector: 'app-layout3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.css']
})
export class Layout3Component implements AfterViewInit {

  @HostBinding('style.--side-width.px')
  @Input()
  sideWidth: number = 0;

  private el: ElementRef;

  @HostBinding('style.--height-head.px')
  heightHead: number = 0;

  @HostBinding('style.--height-foot.px')
  heightFoot: number = 0;

  constructor(
    private resizeObserverService: ResizeObserverService,
    el: ElementRef
  ) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    let elHead: HTMLElement = <HTMLElement> this.el.nativeElement.children[0];
    let elFoot: HTMLElement = <HTMLElement> this.el.nativeElement.children[2];

    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> elHead).subscribe((val) => {
      this.heightHead = val;
    });
    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> elFoot).subscribe((val) => {
      this.heightFoot = val;
    })
  }

}
