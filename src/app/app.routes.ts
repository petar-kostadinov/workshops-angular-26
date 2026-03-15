import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { Themes } from './features/themes/themes';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    
    { path: "home", component: HomeComponent },
    { path: "themes", component: Themes },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },

];
