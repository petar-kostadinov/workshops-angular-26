import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../../core/services/api';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item/post-item';

@Component({
  selector: 'app-recent-posts',
  standalone: true, 
  imports: [PostItemComponent],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPostsComponents implements OnInit {
posts: Post[] = [];

constructor(private apiService: ApiService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
      this.cd.detectChanges(); // ако имаш NG0100
    });
  }
}