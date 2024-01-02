import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../app.model';
import { DateTimeService } from '../../../services/date-time.service';

@Component({
  selector: 'app-jobs-card',
  standalone: true,
  imports: [],
  templateUrl: './jobs-card.component.html',
})
export class JobsCardComponent {
  @Input()
  jobItem!: NewsItem;

  constructor(private dateTimeService: DateTimeService) {}

  formatTime(timestamp: number) {
    return this.dateTimeService.getRelativeTime(timestamp);
  }
}
