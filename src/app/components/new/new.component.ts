import { Component, OnInit } from '@angular/core';
import { InfiniteScrollDirective } from '../../shared/infinite-scroll.directive';
import { NewsService } from '../../services/news.service';
import { NewsStoreService } from '../../store/news-store.service';
import { NewsItem } from '../../app.model';
import { Observable } from 'rxjs';
import { NewsCardComponent } from './new-card/new-card.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-new',
  standalone: true,
  templateUrl: './new.component.html',
  imports: [
    CommonModule,
    InfiniteScrollDirective,
    NewsCardComponent,
    SpinnerComponent,
  ],
})
export class NewComponent implements OnInit {
  newNews$: Observable<NewsItem[]>;
  isLoading: boolean = false;

  constructor(
    private newsService: NewsService,
    private newsStoreService: NewsStoreService
  ) {
    this.newNews$ = this.newsStoreService.newNewsItems$;
  }

  ngOnInit(): void {
    this.newsService.fetchNewsIds('newstories').subscribe(() => {
      this.loadMore();
    });
  }

  loadMore() {
    this.isLoading = true;
    this.newsService.fetchNewsBatch().subscribe({
      next: (newsItems) => {
        newsItems.forEach((item) => this.newsStoreService.addNewNewsItem(item));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading new news:', error);
        this.isLoading = false;
      },
    });
  }
}
