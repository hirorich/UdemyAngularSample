import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

type BoxSize = {
  width: number,
  height: number
}

/**
 * サイズ変更監視を間引く時間(ms)
 */
const DEBOUNCE_TIME: number = 500;

/**
 * HTML要素のサイズ変更監視サービス
 */
@Injectable({
  providedIn: 'root'
})
export class ResizeObserverService {

  constructor() { }

  /**
   * HTML要素のサイズ変更を監視するObservableを生成する。
   * @param el 監視対象のHTML要素
   * @returns サイズ変更監視Observable
   */
  private createResizeObservable(el: HTMLElement): Observable<BoxSize> {
    return new Observable<BoxSize>((subject) => {
      let observer: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[] ) => {
        if (entries === undefined || entries.length === 0) return;
        let entry: ResizeObserverEntry = entries[0];

        if (entry === undefined || entry.borderBoxSize === undefined || entry.borderBoxSize.length === 0) return;
        let borderBoxSize: ResizeObserverSize = entry.borderBoxSize[0];

        if (borderBoxSize === undefined) return;
        let result: BoxSize = {
          width: borderBoxSize.inlineSize,
          height: borderBoxSize.blockSize
        };
        subject.next(result);
      });
      observer.observe(el);
    }).pipe(debounceTime(DEBOUNCE_TIME));
  }

  /**
   * HTML要素の幅変更を監視するObservableを生成する。
   * @param el 監視対象のHTML要素
   * @returns 幅変更監視Observable
   */
  createWidthResizeObservable(el: HTMLElement): Observable<number> {
    return this.createResizeObservable(el).pipe(map((result) => result.width));
  }

  /**
   * HTML要素の高さ変更を監視するObservableを生成する。
   * @param el 監視対象のHTML要素
   * @returns 高さ変更監視Observable
   */
  createHeightResizeObservable(el: HTMLElement): Observable<number> {
    return this.createResizeObservable(el).pipe(map((result) => result.height));
  }
}
