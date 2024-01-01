import { Component, OnInit } from '@angular/core';
import { InfiniteScrollDirective } from '../../shared/infinite-scroll.directive';
import { NewsService } from '../../services/news.service';
import { NewsStoreService } from '../../store/news-store.service';
import { NewsItem } from '../../app.model';
import { Observable } from 'rxjs';
import { NewsCardComponent } from './new-card/new-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  templateUrl: './new.component.html',
  imports: [CommonModule, InfiniteScrollDirective, NewsCardComponent],
})
export class NewComponent implements OnInit {
  newNews$: Observable<NewsItem[]>;

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
    this.newsService.fetchNewsBatch().subscribe((newsItems) => {
      newsItems.forEach((item) => this.newsStoreService.addNewNewsItem(item));
    });
  }
}
