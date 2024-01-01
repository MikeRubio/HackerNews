import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from '../../app.model';
import { NewsService } from '../../services/news.service';
import { NewsStoreService } from '../../store/news-store.service';
import { NewsCardComponent } from './news-card/news-card.component';
import { InfiniteScrollDirective } from '../../shared/infinite-scroll.directive';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  templateUrl: './feed.component.html',
  imports: [
    CommonModule,
    NewsCardComponent,
    InfiniteScrollDirective,
    SpinnerComponent,
  ],
})
export class FeedComponent implements OnInit {
  topNewsItems$: Observable<NewsItem[]>;
  isLoading: boolean = false;

  constructor(
    private newsService: NewsService,
    private newsStoreService: NewsStoreService
  ) {
    this.topNewsItems$ = this.newsStoreService.topNewsItems$;
  }

  ngOnInit(): void {
    this.newsService.fetchNewsIds('topstories').subscribe(() => {
      this.loadMore();
    });
  }

  loadMore() {
    this.isLoading = true;
    this.newsService.fetchNewsBatch().subscribe({
      next: (newsItems) => {
        newsItems.forEach((item) => this.newsStoreService.addTopNewsItem(item));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading news:', error);
        this.isLoading = false;
      },
    });
  }
}
