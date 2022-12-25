import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ResizeObserverService } from 'src/app/service/resize-observer.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements AfterViewInit {

  @Input() sideWidth: number = 0;

  private el: ElementRef;

  constructor(
    private resizeObserverService: ResizeObserverService,
    el: ElementRef
  ) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    let elHead: HTMLElement = <HTMLElement> this.el.nativeElement.children[0];
    let elContent: HTMLElement = <HTMLElement> this.el.nativeElement.children[1];
    let elSide: HTMLElement = <HTMLElement> elContent.children[0];
    let elMain: HTMLElement = <HTMLElement> elContent.children[1];

    let observable = this.resizeObserverService.createHeightResizeObservable(elHead);
    observable.subscribe((val) => this.setContentHeight(elContent, val));
  }

  private setContentHeight(elContent: HTMLElement, headerHeight: number): void {
    elContent.style.height = `calc(100% - ${headerHeight}px)`;
  }

}
