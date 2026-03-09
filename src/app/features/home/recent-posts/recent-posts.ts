import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../../shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  imports: [],
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
