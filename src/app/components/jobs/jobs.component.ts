import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollDirective } from '../../shared/infinite-scroll.directive';
import { NewsItem } from '../../app.model';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsStoreService } from '../../store/news-store.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { JobsCardComponent } from './jobs-card/jobs-card.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.component.html',
  imports: [
    CommonModule,
    InfiniteScrollDirective,
    SpinnerComponent,
    JobsCardComponent,
  ],
})
export class JobsComponent implements OnInit {
  jobs$: Observable<NewsItem[]>;
  isLoading: boolean = false;

  constructor(
    private newsService: NewsService,
    private newsStoreService: NewsStoreService
  ) {
    this.jobs$ = this.newsStoreService.jobStoriesItems$;
  }

  ngOnInit(): void {
    this.newsService.fetchNewsIds('jobstories').subscribe(() => {
      this.loadMore();
    });
  }

  loadMore() {
    this.isLoading = true;
    this.newsService.fetchNewsBatch().subscribe({
      next: (jobsItems) => {
        jobsItems.forEach((item) =>
          this.newsStoreService.addJobStoriesItem(item)
        );
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.isLoading = false;
      },
    });
  }
}
