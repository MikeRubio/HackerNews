import { Component, HostBinding, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DarkModeService } from './services/dark-mode.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule, NavComponent],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') get mode() {
    return this.darkModeService.darkMode();
  }

  httpClient = inject(HttpClient);
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}
}
