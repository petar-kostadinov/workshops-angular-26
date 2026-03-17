import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { Themes } from './features/themes/themes';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ThemeContentComponent } from './features/themes/theme-content/theme-content';
import { authGuard } from './core/guards/auth-guard';
import { ProfileComponent } from './features/profile/profile';
import { NotFoundComponent } from './features/not-found/not-found';
import { NewThemeComponent } from './features/themes/new-theme/new-theme';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "home", component: HomeComponent },

    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },

    { path: "themes", component: Themes },
    { path: "themes/:themeId", component: ThemeContentComponent },
    { path: "add-theme", component: NewThemeComponent, canActivate: [authGuard] },


    { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
    { path: "**", component: NotFoundComponent},
];
