import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsItem } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class NewsStoreService {
  private _topNewsItems: BehaviorSubject<NewsItem[]> = new BehaviorSubject<
    NewsItem[]
  >([]);
  private _newNewsItems: BehaviorSubject<NewsItem[]> = new BehaviorSubject<
    NewsItem[]
  >([]);
  private _showStoriesItems: BehaviorSubject<NewsItem[]> = new BehaviorSubject<
    NewsItem[]
  >([]);
  private _jobStoriesItems: BehaviorSubject<NewsItem[]> = new BehaviorSubject<
    NewsItem[]
  >([]);

  constructor() {}

  get topNewsItems$(): Observable<NewsItem[]> {
    return this._topNewsItems.asObservable();
  }

  get newNewsItems$(): Observable<NewsItem[]> {
    return this._newNewsItems.asObservable();
  }

  get showStoriesItems$(): Observable<NewsItem[]> {
    return this._showStoriesItems.asObservable();
  }
  get jobStoriesItems$(): Observable<NewsItem[]> {
    return this._jobStoriesItems.asObservable();
  }

  addTopNewsItem(item: NewsItem): void {
    const currentItems = this._topNewsItems.getValue();
    this._topNewsItems.next([...currentItems, item]);
  }

  addNewNewsItem(item: NewsItem): void {
    const currentItems = this._newNewsItems.getValue();
    this._newNewsItems.next([...currentItems, item]);
  }
  addShowStoriesItem(item: NewsItem): void {
    const currentItems = this._showStoriesItems.getValue();
    this._showStoriesItems.next([...currentItems, item]);
  }
  addJobStoriesItem(item: NewsItem): void {
    const currentItems = this._jobStoriesItems.getValue();
    this._jobStoriesItems.next([...currentItems, item]);
  }
}
