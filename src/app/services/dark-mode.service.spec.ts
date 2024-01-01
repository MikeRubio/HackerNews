import { TestBed } from '@angular/core/testing';
import { DarkModeService } from './dark-mode.service';

describe('DarkModeService', () => {
  let service: DarkModeService;
  let localStorageMock: any;

  beforeEach(() => {
    localStorageMock = (function () {
      let store: any = {};
      return {
        getItem: function (key: string) {
          return store[key] || null;
        },
        setItem: function (key: string, value: string) {
          store[key] = value.toString();
        },
        clear: function () {
          store = {};
        },
      };
    })();

    spyOn(localStorageMock, 'getItem').and.callThrough();
    spyOn(localStorageMock, 'setItem').and.callThrough();

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    TestBed.configureTestingModule({
      providers: [DarkModeService],
    });
    service = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize dark mode from localStorage', () => {
    expect(localStorageMock.getItem).toHaveBeenCalledWith('darkMode');
  });

  it('should toggle dark mode and update localStorage', () => {
    service.toggleDarkMode(true);
    expect(service.darkMode()).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('darkMode', 'true');

    service.toggleDarkMode(false);
    expect(service.darkMode()).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('darkMode', 'false');
  });
});
