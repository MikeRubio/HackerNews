import { Component } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css',
  imports: [NewsCardComponent],
})
export class NewsFeedComponent {}
