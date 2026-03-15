import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { Themes } from './features/themes/themes';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    
    { path: "home", component: HomeComponent },
    { path: "themes", component: Themes },
];
