import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import { ToastBase } from '../base-toast/base-toast.component';

@Component({
  selector: '[toast-component]',
  templateUrl: '../base-toast/base-toast.component.html',
  styleUrl: './toast.component.scss',
  host: {
    '[style.--animation-easing]': 'params.easing',
    '[style.--animation-duration]': 'params.easeTime + "ms"',
    'animate.enter': 'toast-in',
  },
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast<ConfigPayload = unknown>
  extends ToastBase<ConfigPayload>
  implements AfterViewInit
{
  readonly params = { easeTime: this.toastPackage.config.easeTime, easing: 'ease-in' };
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    // Must be non-passive to call preventDefault() and block browser swipe-back
    this.elementRef.nativeElement.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (Math.abs(this._swipeDeltaX) > 10) e.preventDefault();
      },
      { passive: false },
    );
  }

  override remove(): void {
    if (this.state() === 'removed') return;

    clearTimeout(this.timeout);
    this.state.set('removed');
    this.elementRef.nativeElement.classList.add('toast-out');
    this.timeout = this.timeoutsService.setTimeout(
      () => this.toastrService.remove(this.toastPackage.toastId),
      +this.params.easeTime,
    );
  }

  protected override applySwipeTranslate(delta: number): void {
    const el = this.elementRef.nativeElement;
    el.style.transition = 'none';
    el.style.transform = `translateX(${delta}px)`;
    el.style.opacity = `${Math.max(0, 1 - Math.abs(delta) / 200)}`;
  }

  protected override resetSwipeTranslate(): void {
    const el = this.elementRef.nativeElement;
    el.style.transition = 'transform 200ms ease, opacity 200ms ease';
    el.style.transform = '';
    el.style.opacity = '';
  }

  protected override swipeRemove(delta: number): void {
    if (this.state() === 'removed') return;

    clearTimeout(this.timeout);
    this.state.set('removed');
    const el = this.elementRef.nativeElement;
    el.style.setProperty('--swipe-direction', delta > 0 ? '120%' : '-120%');
    el.classList.add('toast-swipe-out');
    this.timeout = this.timeoutsService.setTimeout(
      () => this.toastrService.remove(this.toastPackage.toastId),
      +this.params.easeTime,
    );
  }
}
