import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

/**
 * 監視要素のサイズ
 */
export type BoxSize = {
  width: number,
  height: number
}

/**
 * 要素のサイズ変更を監視するイベントを実装
 */
@Directive({
  selector: '[appOnResize]',
  standalone: true
})
export class OnResizeDirective implements OnInit, AfterViewInit, OnDestroy {

  /**
   * 要素のリサイズイベント
   */
  @Output()
  onResize: EventEmitter<BoxSize> = new EventEmitter();

  /**
   * ResizeObserver
   *
   *     https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver
   */
  private resizeObserver: ResizeObserver | undefined = undefined;

  constructor(
    private el: ElementRef
  ) {
  }

  /**
   * 監視設定
   */
  ngOnInit(): void {
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[] ) => {
      if (entries === undefined || entries.length === 0) return;
      let entry: ResizeObserverEntry = entries[0];

      if (entry === undefined || entry.borderBoxSize === undefined || entry.borderBoxSize.length === 0) return;
      let borderBoxSize: ResizeObserverSize = entry.borderBoxSize[0];

      if (borderBoxSize === undefined) return;
      let result: BoxSize = {
        width: borderBoxSize.inlineSize,
        height: borderBoxSize.blockSize
      };
      this.onResize.emit(result);
    });
  }

  /**
   * 監視開始
   */
  ngAfterViewInit(): void {
    if (this.resizeObserver !== undefined) {
      this.resizeObserver.observe(this.el.nativeElement);
    }
  }

  /**
   * 監視終了
   */
  ngOnDestroy(): void {
    if (this.resizeObserver !== undefined) {
      this.resizeObserver.disconnect();
    }
  }
}
