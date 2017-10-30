import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostService } from './../services/post.service';
import { Post } from './../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.postService.postDeleted$
      .subscribe(id => {
        if (this.post && this.post.id === id) {
          this.router.navigate(['/']);
        }
      });

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id: number = +params.get('id');
        return this.postService.getPost(id);
      })
      .subscribe(post => {
        this.post = post;
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
}
