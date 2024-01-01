import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true,
})
export class InfiniteScrollDirective {
  @Output() scrolled = new EventEmitter<void>();
  private isThrottled = false;
  private throttleDuration = 300;

  constructor() {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isThrottled) {
      return;
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.scrolled.emit();
      this.isThrottled = true;

      setTimeout(() => {
        this.isThrottled = false;
      }, this.throttleDuration);
    }
  }
}
