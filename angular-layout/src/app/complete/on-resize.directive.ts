import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 監視要素のサイズ
 */
export type BorderBoxSize = {
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
  onResize = new EventEmitter<BorderBoxSize>();

  /**
   * ResizeObserver
   *
   *     https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver
   */
  private resizeObserver: ResizeObserver | undefined = undefined;

  /**
   * 監視結果通知用
   */
  private subject = new Subject<BorderBoxSize>();

  constructor(
    private el: ElementRef
  ) {
  }

  /**
   * 監視設定
   */
  ngOnInit(): void {
    // Subjectの設定
    this.subject.subscribe((val) => {this.onResize.emit(val)});

    // ResizeObserverの設定
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[] ) => {
      if (entries === undefined || entries.length === 0) return;
      let entry: ResizeObserverEntry = entries[0];

      if (entry === undefined || entry.borderBoxSize === undefined || entry.borderBoxSize.length === 0) return;
      let borderBoxSize: ResizeObserverSize = entry.borderBoxSize[0];

      if (borderBoxSize === undefined) return;
      let result: BorderBoxSize = {
        width: borderBoxSize.inlineSize,
        height: borderBoxSize.blockSize
      };
      this.subject.next(result);
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
    this.subject.unsubscribe();
  }
}
