import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post';
import { RouterLink } from "@angular/router";
import { TitleSlicePipe } from '../../pipes/title-slice-pipe';
import { TimeAgoPostedPipe } from '../../pipes/time-ago-posted-pipe';

@Component({
  selector: 'app-post-item',
  standalone: true, 
  imports: [TitleSlicePipe, TimeAgoPostedPipe],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItemComponent {
  @Input({ required: true }) post!: Post
} 
