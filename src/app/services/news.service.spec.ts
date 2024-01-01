import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NewsService } from './news.service';
import { ApiService } from './api.service';
import { NewsItem } from '../app.model';

describe('NewsService', () => {
  let service: NewsService;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['get']);

    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: ApiService, useValue: apiServiceMock },
      ],
    });

    service = TestBed.inject(NewsService);
  });

  it('should fetch news IDs', () => {
    const dummyIds = [1, 2, 3];
    apiServiceMock.get.and.returnValue(of(dummyIds));

    service.fetchNewsIds('topstories').subscribe((ids) => {
      expect(ids).toEqual(dummyIds);
      expect(service['newsIds']).toEqual(dummyIds);
    });

    expect(apiServiceMock.get).toHaveBeenCalledWith(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
  });

  it('should fetch news batch', () => {
    service['newsIds'] = [1, 2];
    service['currentIndex'] = 0;

    const dummyNewsItems: NewsItem[] = [
      {
        by: 'test_one',
        descendants: 0,
        id: 1,
        time: 1704151468,
        title: 'My Experience Using Shopify',
      },
      {
        by: 'test_2',
        descendants: 4,
        id: 2,
        time: 1704151438,
        title: 'My Experience Using Spotify',
      },
    ];

    apiServiceMock.get.and.callFake((url): any => {
      if (url.includes('/item/')) {
        const id = Number(url.split('/').pop()?.split('.json')[0]);
        return of(dummyNewsItems.find((item) => item.id === id));
      }
      return of([]);
    });

    service.fetchNewsBatch().subscribe((items) => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyNewsItems);
      expect(apiServiceMock.get.calls.count()).toBe(2);
    });
  });
});
