import { TestBed } from '@angular/core/testing';
import { NewsItem } from '../app.model';
import { NewsStoreService } from './news-store.service';

describe('NewsStoreService', () => {
  let service: NewsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsStoreService);
  });

  it('should add an item to top news items', (done: DoneFn) => {
    const testItem: NewsItem = {
      by: 'elorant',
      descendants: 0,
      id: 38835239,
      score: 3,
      time: 1704142474,
      title: 'Paleontologist discovers rare soft tissue in fossil of crab',
      url: 'https://phys.org/news/2023-12-paleontologist-rare-soft-tissue-fossil.html',
    };
    service.addTopNewsItem(testItem);

    service.topNewsItems$.subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items).toContain(testItem);
      done();
    });
  });

  it('should start with an empty array for any news items', (done: DoneFn) => {
    service.topNewsItems$.subscribe((items) => {
      expect(items.length).toBe(0);
      done();
    });
  });

  it('should handle multiple top news items', (done: DoneFn) => {
    const testItems: NewsItem[] = [
      {
        by: 'PaulHoule',
        descendants: 19,
        id: 38834962,
        kids: [38835414],
        score: 13,
        time: 1704140164,
        title:
          'In a win for the climate (and safety), urban US speed limits are dropping',
        url: 'https://yaleclimateconnections.org/2023/12/in-a-win-for-the-climate-urban-speed-limits-are-dropping/',
      },
      {
        by: 'eterps',
        descendants: 2,
        id: 38830777,
        kids: [],
        score: 39,
        time: 1704102912,
        title:
          'Free techical magazine about programming, hacking, security, electronics, retro',
        url: 'https://pagedout.institute',
      },
    ];
    testItems.forEach((item) => service.addTopNewsItem(item));

    service.topNewsItems$.subscribe((items) => {
      expect(items.length).toBe(2);
      expect(items).toEqual(testItems);
      done();
    });
  });
});
