import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsComponent } from './components/news/news.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { LoginGuard } from './services/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:slug',
    component: NewsDetailComponent
  },
  {
    path: 'tournament/:slug',
    component: TournamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
