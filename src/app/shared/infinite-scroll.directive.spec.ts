import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

describe('InfiniteScrollDirective', () => {
  let directive: InfiniteScrollDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    directive = new InfiniteScrollDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit scrolled event when scrolled to bottom', () => {
    jest.spyOn(directive.scrolled, 'emit');
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(document.body, 'offsetHeight', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    directive.onScroll();
    expect(directive.scrolled.emit).toHaveBeenCalled();
  });

  it('should not emit scrolled event when not scrolled to bottom', () => {
    jest.spyOn(directive.scrolled, 'emit');
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(document.body, 'offsetHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    directive.onScroll();
    expect(directive.scrolled.emit).not.toHaveBeenCalled();
  });

  it('should throttle scroll events', fakeAsync(() => {
    jest.spyOn(directive.scrolled, 'emit');
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(document.body, 'offsetHeight', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    directive.onScroll();
    expect(directive.scrolled.emit).toHaveBeenCalledTimes(1);

    directive.onScroll();
    expect(directive.scrolled.emit).toHaveBeenCalledTimes(1);

    tick(directive['throttleDuration']);

    directive.onScroll();
    expect(directive.scrolled.emit).toHaveBeenCalledTimes(2);

    flush();
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
