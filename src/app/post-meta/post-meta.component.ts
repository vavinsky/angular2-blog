import { PostService } from './../services/post.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../services/authentication.service';
import { AuthorizationService } from './../services/authorization.service';
import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-meta',
  templateUrl: './post-meta.component.html',
  styleUrls: ['./post-meta.component.scss']
})
export class PostMetaComponent implements OnInit {
  @Input() post: Post;
  canModify: Observable<boolean>;

  constructor(
    private authorizationService: AuthorizationService,
    private authenticationService: AuthenticationService,
    private postService: PostService) { }

  ngOnInit() {
    this.authenticationService.currentUser$
      .subscribe(user => {
        this.canModify = Observable.of<boolean>(this.authorizationService.canModifyPost(this.post, user));
      });
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
          this.post = null;
        });
    }
  }
}
