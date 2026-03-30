import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.HomeComponent),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register').then(
        (m) => m.RegisterComponent,
      ),
  },

  {
    path: 'themes',
    loadComponent: () =>
      import('./features/themes/themes').then((m) => m.Themes),
  },
  {
    path: 'themes/:themeId',
    loadComponent: () =>
      import('./features/themes/theme-content/theme-content').then(
        (m) => m.ThemeContentComponent,
      ),
  },
  {
    path: 'add-theme',
    loadComponent: () =>
      import('./features/themes/new-theme/new-theme').then(
        (m) => m.NewThemeComponent,
      ),
    canActivate: [authGuard],
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
