import { Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    loadComponent: () =>
      import('./accounts/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
      },

      {
        path: 'feed',
        loadComponent: () =>
          import('./dashboard/feed/feed-page/feed-page.component').then(
            (m) => m.FeedPageComponent
          ),
      },
      {
        path: 'create-post',
        loadComponent: () =>
          import('./dashboard/feed/create-post/create-post.component').then(
            (m) => m.CreatePostComponent
          ),
      },
      {
        path: 'my-friends',
        loadComponent: () =>
          import(
            './dashboard/friends/friends-list/friends-list.component'
          ).then((m) => m.FriendsListComponent),
      },
    ],
  },
];
