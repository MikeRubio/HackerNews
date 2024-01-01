import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../app.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  @Input()
  newsItem!: NewsItem;

  @Input()
  index!: number;

  constructor() {}

  getRelativeTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const seconds = Math.floor(
      (now.getTime() - new Date(date).getTime()) / 1000
    );

    if (seconds < 60) {
      return 'Just now';
    } else if (seconds < 3600) {
      return Math.floor(seconds / 60) + ' minutes ago';
    } else if (seconds < 86400) {
      return Math.floor(seconds / 3600) + ' hours ago';
    } else {
      return Math.floor(seconds / 86400) + ' days ago';
    }
  }
}
