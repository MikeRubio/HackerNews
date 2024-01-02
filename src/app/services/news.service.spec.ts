import { TestBed } from '@angular/core/testing';
import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {
  let service: DateTimeService;
  let baseTime: Date;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeService);

    baseTime = new Date('2023-01-01T12:00:00Z');
    jasmine.clock().install();
    jasmine.clock().mockDate(baseTime);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should return "Just now" for less than 60 seconds', () => {
    const timestamp = baseTime.getTime() / 1000 - 30;
    expect(service.getRelativeTime(timestamp)).toBe('Just now');
  });

  it('should return correct minutes for less than 3600 seconds', () => {
    const timestamp = baseTime.getTime() / 1000 - 10 * 60;
    expect(service.getRelativeTime(timestamp)).toBe('10 minutes ago');
  });

  it('should return correct hours for less than 86400 seconds', () => {
    const timestamp = baseTime.getTime() / 1000 - 2 * 3600;
    expect(service.getRelativeTime(timestamp)).toBe('2 hours ago');
  });

  it('should return correct days for 86400 seconds or more', () => {
    const timestamp = baseTime.getTime() / 1000 - 3 * 86400;
    expect(service.getRelativeTime(timestamp)).toBe('3 days ago');
  });
});
