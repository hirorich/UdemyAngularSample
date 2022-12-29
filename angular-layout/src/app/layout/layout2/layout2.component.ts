import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeObserverService } from 'src/app/service/resize-observer.service';

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements AfterViewInit {

  @Input() sideWidth: number = 0;

  private heightHead: number = 0;
  private heightFoot: number = 0;

  get gridTemplateColumns(): string {
    return `${this.sideWidth}px calc(100% - ${this.sideWidth}px)`;
  }
  get sidebarTop(): string {
    return `${this.heightHead}px`;
  }
  get sidebarHeight(): string {
    return `calc(100vh - ${this.heightHead}px - ${this.heightFoot}px)`;
  }
  get mainMarginBottom(): string {
    return `${this.heightFoot}px`;
  }

  constructor(
    private resizeObserverService: ResizeObserverService,
    private el: ElementRef
  ) {
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
