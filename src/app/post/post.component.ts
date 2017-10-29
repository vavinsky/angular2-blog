import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AuthenticationService } from './../services/authentication.service';
import { AuthorizationService } from './../services/authorization.service';
import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { User } from './../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  canModify: Observable<boolean>;
  currentUser: User;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authorizationService: AuthorizationService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id: number = +params.get('id');
        return this.postService.getPost(id);
      })
      .subscribe(post => {
        this.post = post;

        this.authenticationService.currentUser$
          .subscribe(user => {
            this.currentUser = user;
            this.canModify = Observable.of<boolean>(this.authorizationService.canModifyPost(this.post, user));
          });
      },
      (err: any) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          //this.alertService.error(err.error.message, true);
          this.router.navigate(['/']);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.body.error}`);

          if (err.status === 404) {
            this.router.navigate(['/404']);
          }
          else {
            //this.alertService.error(err.body.error, true);
            this.router.navigate(['/']);
          }
        }
      });
  }

  confirmDeleting() {
    if (confirm("Are you sure to delete " + this.post.title)) {
      this.postService.deletePost(this.post.id)
        .then(() => {
          this.router.navigate(['/']);
        });
    }
  }

  confirmPublishing() {
    if (confirm("Are you sure to publish the post " + this.post.title)) {
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
}
