import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../app.model';
import { DateTimeService } from '../../../services/date-time.service';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [],
  templateUrl: './show-card.component.html',
})
export class ShowCardComponent {
  @Input()
  showItem!: NewsItem;

  constructor(private dateTimeService: DateTimeService) {}

  formatTime(timestamp: number) {
    return this.dateTimeService.getRelativeTime(timestamp);
  }
}
