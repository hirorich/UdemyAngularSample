import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ResizeObserverService } from 'src/app/service/resize-observer.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements AfterViewInit {

  @Input() sideWidth: number = 0;

  private el: ElementRef;
  private elHead: HTMLElement | undefined;
  private elContent: HTMLElement | undefined;
  private elSide: HTMLElement | undefined;
  private elMain: HTMLElement | undefined;
  private elFoot: HTMLElement | undefined;

  private heightHead: number = 0;
  private heightFoot: number = 0;

  constructor(
    private resizeObserverService: ResizeObserverService,
    el: ElementRef
  ) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    this.elHead = <HTMLElement> this.el.nativeElement.children[0];
    this.elContent = <HTMLElement> this.el.nativeElement.children[1];
    this.elSide = <HTMLElement> this.elContent.children[0];
    this.elMain = <HTMLElement> this.elContent.children[1];
    this.elFoot = <HTMLElement> this.el.nativeElement.children[2];

    of(this.sideWidth).subscribe((val) => this.configContent());
    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> this.elHead).subscribe((val) => {
      this.heightHead = val;
      this.configSide();
    });
    this.resizeObserverService.createHeightResizeObservable(<HTMLElement> this.elFoot).subscribe((val) => {
      this.heightFoot = val;
      this.configSide();
      this.configMain();
    })
  }

  private configContent(): void {
    let el: HTMLElement = <HTMLElement> this.elContent;
    el.style.gridTemplateColumns = `${this.sideWidth}px calc(100% - ${this.sideWidth}px)`;
  }

  private configSide(): void {
    let el: HTMLElement = <HTMLElement> this.elSide;
    el.style.top = `${this.heightHead}px`;
    el.style.height = `calc(100vh - ${this.heightHead}px - ${this.heightFoot}px)`;
  }

  private configMain(): void {
    let el: HTMLElement = <HTMLElement> this.elMain;
    el.style.marginBottom = `${this.heightFoot}px`;
  }

}
