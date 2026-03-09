import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item/post-item';

@Component({
  selector: 'app-recent-posts',
  imports: [PostItemComponent],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPostsComponents implements OnInit {
posts: Post[] = [];

constructor(private ApiService: ApiService) {}

ngOnInit(): void {
  this.ApiService.getLatestPosts().subscribe((posts) => {
    this.posts = posts;
  })
}
}
