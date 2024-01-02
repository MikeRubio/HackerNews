import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../app.model';
import { DateTimeService } from '../../../services/date-time.service';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [],
  templateUrl: './new-card.component.html',
})
export class NewsCardComponent {
  @Input()
  newsItem!: NewsItem;

  @Input()
  index!: number;

  constructor(private dateTimeService: DateTimeService) {}

  formatTime(timestamp: number) {
    return this.dateTimeService.getRelativeTime(timestamp);
  }
}
