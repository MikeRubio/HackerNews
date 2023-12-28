import { Component, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule, NavComponent],
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.darkModeService.darkMode();
  }

  constructor(private darkModeService: DarkModeService) {}
}
