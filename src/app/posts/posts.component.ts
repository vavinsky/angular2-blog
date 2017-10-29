import { AuthenticationService } from './../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { User } from './../models/user';
import { Post } from './../models/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  loading: boolean;
  showCurrentUserPosts: boolean;
  currentUser: User;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {

    this.route.data
      .subscribe(data => {
        this.showCurrentUserPosts = !!data['currentUserPosts'];
      })
  }

  ngOnInit() {
    this.authenticationService.currentUser$
      .subscribe(user => {
        this.currentUser = user;
        this.populatePosts(this.showCurrentUserPosts);
      });
  }

  private populatePosts(showCurrentUserPosts: boolean): void {
    this.loading = true;

    let posts = this.postService.getPublishedPosts();
    if (showCurrentUserPosts) {
      if (this.currentUser && this.currentUser.username) {
        posts = this.postService.getUserPosts(this.currentUser.username);
      }
    }

    posts.then(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }

  onPostDeleted(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
