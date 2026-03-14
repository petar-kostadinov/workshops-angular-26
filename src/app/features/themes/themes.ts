import { Component } from '@angular/core';
import { ThemesListComponent } from './themes-list/themes-list';
import { RecentPostsComponents } from './recent-posts/recent-posts';

@Component({
  selector: 'app-themes',
  imports: [ThemesListComponent, RecentPostsComponents],
  templateUrl: './themes.html',
  styleUrl: './themes.css',
})
export class Themes {}
