import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';
import { SidebarDirective } from './sidebar.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, SidebarDirective],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  @ViewChild('sidebar', { static: false }) sidebarDirective!: SidebarDirective;

  constructor(public darkModeService: DarkModeService) {}

  darkModeToggle(state: boolean) {
    this.darkModeService.toggleDarkMode(state);
  }
  toggleSidebar() {
    this.sidebarDirective.toggleClass();
  }
}
