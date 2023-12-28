import { Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewComponent } from './components/new/new.component';
import { PastComponent } from './components/past/past.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AskComponent } from './components/ask/ask.component';
import { ShowComponent } from './components/show/show.component';
import { JobsComponent } from './components/jobs/jobs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NewsFeedComponent },
  { path: 'new', component: NewComponent },
  { path: 'past', component: PastComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'ask', component: AskComponent },
  { path: 'show', component: ShowComponent },
  { path: 'jobs', component: JobsComponent },
];
