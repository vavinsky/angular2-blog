import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './../services/authentication.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from './../models/user';
import { Post } from './../models/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  loading: boolean;
  showCurrentUserPosts: boolean;
  showPostsByTag: boolean;
  currentUser: User;
  tag: string;
  currentUserSubscription: Subscription;
  postDeletedSubscription: Subscription;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.route.data
      .subscribe(data => {
        this.showCurrentUserPosts = !!data['currentUserPosts'];
        this.showPostsByTag = !!data['showPostsByTag'];
      })
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }

    if (this.postDeletedSubscription) {
      this.postDeletedSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    if (this.showPostsByTag) {
      this.fetchPostsByTag();
    }
    else if (this.showCurrentUserPosts) {
      this.currentUserSubscription = this.authenticationService.currentUser$
        .subscribe(user => {
          this.currentUser = user;
          this.fetchPosts(true);
        });
    }
    else {
      this.fetchPosts(false);
    }

    this.postDeletedSubscription = this.postService.postDeleted$
      .subscribe(id => this.posts = this.posts.filter(p => p.id !== id));
  }

  private fetchPostsByTag(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const tag: string = params.get("tag");
        this.tag = tag;

        this.loading = true;
        return this.postService.getPostsByTag(tag);
      })
      .subscribe(posts => {
        this.posts = posts;
        this.loading = false
      });
  }

  private fetchPosts(showCurrentUserPosts: boolean): void {
    this.loading = true;

    if (showCurrentUserPosts) {
      if (this.currentUser && this.currentUser.username) {
        this.postService.getUserPosts(this.currentUser.username)
          .then(posts => {
            this.posts = posts;
            this.loading = false;
          });
      }
      else {
        this.router.navigate(['/']);
      }
    }
    else {
      this.postService.getPublishedPosts()
        .then(posts => {
          this.posts = posts;
          this.loading = false;
        });
    }
  }
}
