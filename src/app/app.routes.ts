import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { NewComponent } from './components/new/new.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ShowComponent } from './components/show/show.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FeedComponent },
  { path: 'new', component: NewComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'show', component: ShowComponent },
];
