import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, concatMap, toArray } from 'rxjs/operators';
import { ApiService } from './api.service';
import { NewsItem } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://hacker-news.firebaseio.com/v0';
  private batchSize = 10;
  private currentIndex = 0;
  private newsIds: number[] = [];

  constructor(private apiService: ApiService) {}

  fetchNewsIds(
    storyType: 'newstories' | 'topstories' | 'showstories' | 'jobstories'
  ): Observable<number[]> {
    return this.apiService
      .get<number[]>(`${this.apiUrl}/${storyType}.json`)
      .pipe(
        map((ids) => {
          this.newsIds = ids;
          return ids;
        })
      );
  }

  fetchNewsBatch(): Observable<NewsItem[]> {
    const idsToFetch = this.newsIds.slice(
      this.currentIndex,
      this.currentIndex + this.batchSize
    );
    this.currentIndex += this.batchSize;

    return from(idsToFetch).pipe(
      concatMap((id) => this.fetchNewsItem(id)),
      toArray(),
      map((items) => items.filter((item) => item != null))
    );
  }

  private fetchNewsItem(id: number): Observable<NewsItem> {
    return this.apiService.get<NewsItem>(`${this.apiUrl}/item/${id}.json`);
  }
}
