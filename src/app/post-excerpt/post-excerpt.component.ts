import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../services/authentication.service';
import { AuthorizationService } from './../services/authorization.service';
import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { User } from './../models/user';

@Component({
  selector: 'app-post-excerpt',
  templateUrl: './post-excerpt.component.html',
  styleUrls: ['./post-excerpt.component.scss']
})
export class PostExcerptComponent implements OnInit {
  @Input() post: Post;
  @Output() postDeleted = new EventEmitter<number>();
  canModify: Observable<boolean>;
  currentUser: User;

  constructor(
    private router: Router,
    private postService: PostService,
    private authorizationService: AuthorizationService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUser$
      .subscribe(user => {
        this.currentUser = user;
        this.canModify = Observable.of<boolean>(this.authorizationService.canModifyPost(this.post, user));
      });
  }

  gotoDetail(): void {
    this.router.navigate(['/post', this.post.id]);
  }

  confirmPublishing() {
    if (confirm(`Are you sure to publish the post '${this.post.title}'?`)) {
      let postToSave = Object.assign({}, this.post);
      postToSave.isPublished = true;
      postToSave.datePublished = new Date();

      this.postService.updatePost(postToSave)
        .then(() => {
          this.post.isPublished = true;
          this.post.datePublished = postToSave.datePublished;
        });
    }
  }

  confirmDeleting() {
    if (confirm(`Are you sure to delete the post '${this.post.title}'?`)) {
      this.postService.deletePost(this.post.id)
        .then(() => {
          this.postDeleted.emit(this.post.id);
        });
    }
  }
}
