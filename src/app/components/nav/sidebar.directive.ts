import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[navSidebarDirective]',
  standalone: true,
})
export class SidebarDirective {
  @HostBinding('class.translate-x-0') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}

  public toggleClass() {
    this.isOpen = !this.isOpen;
  }
}
