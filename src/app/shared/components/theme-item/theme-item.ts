import { Component, Input } from '@angular/core';
import { Theme } from '../../interfaces/theme';
import { RouterLink } from '@angular/router';
import { TitleSlicePipe } from '../../pipes/title-slice-pipe';
import { DataFormatPipe } from '../../pipes/data-format-pipe';

@Component({
  selector: 'app-theme-item',
  standalone: true, 
  imports: [RouterLink, TitleSlicePipe, DataFormatPipe],
  templateUrl: './theme-item.html',
  styleUrl: './theme-item.css',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: Theme
}
