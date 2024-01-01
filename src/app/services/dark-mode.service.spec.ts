import { TestBed } from '@angular/core/testing';
import { DarkModeService } from './dark-mode.service';

describe('DarkModeService', () => {
  let service: DarkModeService;

  beforeEach(() => {
    // Define storage as a Record to accept string keys
    let storage: Record<string, string> = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return storage[key] || null;
    });
    spyOn(localStorage, 'setItem').and.callFake(
      (key: string, value: string) => {
        storage[key] = value;
      }
    );

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
});
