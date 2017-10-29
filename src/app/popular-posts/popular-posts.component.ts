import { Component, OnInit } from '@angular/core';

import { Post } from './../models/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.scss']
})
export class PopularPostsComponent implements OnInit {
  posts: Post[];
  loading: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.loading = true;
    this.postService.getPublishedPosts()
      .then(posts => {
        let publichedPosts = posts.filter(x => x.datePublished);

        publichedPosts = publichedPosts.sort((a, b) => {
          if (a.commentsCount == b.commentsCount) {
            return a.datePublished < b.datePublished ? 1 : -1;
          }
          return a.commentsCount < b.commentsCount ? 1 : -1;
        });

        this.posts = publichedPosts;
        this.loading = false;
      });
  }
}
