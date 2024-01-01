import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollDirective } from '../../shared/infinite-scroll.directive';
import { NewsItem } from '../../app.model';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsStoreService } from '../../store/news-store.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ShowCardComponent } from './show-card/show-card.component';

@Component({
  selector: 'app-show',
  standalone: true,
  templateUrl: './show.component.html',
  imports: [
    CommonModule,
    InfiniteScrollDirective,
    SpinnerComponent,
    ShowCardComponent,
  ],
})
export class ShowComponent {
  show$: Observable<NewsItem[]>;
  isLoading: boolean = false;

  constructor(
    private newsService: NewsService,
    private newsStoreService: NewsStoreService
  ) {
    this.show$ = this.newsStoreService.showStoriesItems$;
  }

  ngOnInit(): void {
    this.newsService.fetchNewsIds('showstories').subscribe(() => {
      this.loadMore();
    });
  }

  loadMore() {
    this.isLoading = true;
    this.newsService.fetchNewsBatch().subscribe({
      next: (newsItems) => {
        newsItems.forEach((item) =>
          this.newsStoreService.addShowStoriesItem(item)
        );
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading show news:', error);
        this.isLoading = false;
      },
    });
  }
}
