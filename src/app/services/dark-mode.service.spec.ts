import { TestBed } from '@angular/core/testing';
import { DarkModeService } from './dark-mode.service';

describe('DarkModeService', () => {
  let service: DarkModeService;
  let storage: Record<string, string> = {};

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => storage[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          storage[key] = value;
        }),
      },
      writable: true,
    });

    TestBed.configureTestingModule({
      providers: [DarkModeService],
    });

    service = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize dark mode from localStorage', () => {
    expect(service.darkMode()).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode');
  });

  it('should toggle dark mode and update localStorage', () => {
    service.toggleDarkMode(true);
    expect(service.darkMode()).toBe(true);

    service.toggleDarkMode(false);
    expect(service.darkMode()).toBe(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
    storage = {};
  });
});
