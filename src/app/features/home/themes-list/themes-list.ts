import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Theme } from '../../../shared/interfaces/theme';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes.sort(
        (a, b) => b.subscribers.length - a.subscribers.length
      );
    })
  }
}
