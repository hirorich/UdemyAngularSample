import { AfterViewInit, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeObserverService } from 'src/app/service/resize-observer.service';

@Component({
  selector: 'app-layout4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout4.component.html',
  styleUrls: ['./layout4.component.css']
})
export class Layout4Component implements AfterViewInit {

  @HostBinding('style.--side-width.px')
  @Input()
  sideWidth: number = 0;

  constructor(
    private resizeObserverService: ResizeObserverService,
    private el: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    let elHead: HTMLElement = <HTMLElement> this.el.nativeElement.children[0];
    let elFoot: HTMLElement = <HTMLElement> this.el.nativeElement.children[2];

    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> elHead).subscribe((val) => {
      this.el.nativeElement.style.setProperty('--height-head', `${val}px`);
    });
    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> elFoot).subscribe((val) => {
      this.el.nativeElement.style.setProperty('--height-foot', `${val}px`);
    })
  }

}
