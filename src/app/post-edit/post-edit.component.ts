import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import { Tag } from './../models/tag';
import { AlertService } from './../services/alert.service';
import { AuthenticationService } from './../services/authentication.service';
import { AuthorizationService } from './../services/authorization.service';
import { Post } from './../models/post';
import { PostService } from './../services/post.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  loading: boolean;
  post: Post;
  form: FormGroup;
  isSubmitAttempt: boolean;
  isEditing = true;
  ckEditorContent: string;

  get title() { return this.form.get('title'); }

  get excerpt() { return this.form.get('excerpt'); }

  get tags() { return this.form.get('tags'); }

  get content() { return this.form.get('content'); }

  get imageUrl() { return this.form.get('imageUrl'); }

  get isPublished() { return this.form.get('isPublished'); }

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    private alertService: AlertService) {

    this.createForm();
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    if (params && Object.keys(params).length > 0) {
      this.getPost();
    }
    else {
      this.isEditing = false;

      // go to home page if user has logged out
      this.authenticationService.isAuthenticated$
        .subscribe(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/']);
          }
        });
    }

    this.subscribeOnPostDeleted();
  }

  prepareSavePost(): Post {
    const formModel = this.form.value;
    const isEditing = this.post != null;

    const user = this.authenticationService.getCurrentUser();

    if (user == null) {
      this.router.navigate(['/404']);
      return;
    }
    const userName = user.username;

    const isPublished = formModel.isPublished as boolean;
    const savePost: Post = {
      id: isEditing ? this.post.id : null,
      userName: userName,
      title: formModel.title as string,
      imageUrl: formModel.imageUrl as string,
      excerpt: formModel.excerpt as string,
      content: formModel.content as string,
      tags: (formModel.tags ? formModel.tags.split(',') : [])
        .map(v => v.trim())
        .filter((value, index, array) => array.indexOf(value.trim()) === index),
      dateUpdated: new Date(),
      datePublished: isPublished ? new Date() : (this.isEditing ? this.post.datePublished : null),
      isPublished: isPublished,
      commentsCount: isEditing ? this.post.commentsCount : 0
    };
    return savePost;
  }

  onEditorKeyUp(text: string) {
    this.form.patchValue({ content: text });
  }

  save() {
    this.isSubmitAttempt = true;
    if (!this.form.valid) {
      return;
    }
    this.post = this.prepareSavePost();

    if (this.isEditing) {
      this.postService.updatePost(this.post)
        .then((p) => this.navigateToPost(p.id));
    }
    else {
      this.postService.createPost(this.post)
        .then((p) => this.navigateToPost(p.id));
    }
  }

  navigateToPost(id: number) {
    this.destroyEditor();
    this.router.navigate(['/post', id]);
  }

  goBack() {
    this.destroyEditor();
    this.location.back();
  }

  isControlInvalid(field: string) {
    const control = this.form.get(field);
    return !control.valid && (control.dirty || this.isSubmitAttempt);
  }

  getControlClass(field: string) {
    const isValid = this.isControlInvalid(field);
    return {
      'has-error': isValid,
      'has-feedback': isValid
    };
  }

  reset() {
    this.isSubmitAttempt = false;
    this.form.reset();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(256)]],
      excerpt: [null, [Validators.required, Validators.maxLength(1024)]],
      content: [null, [Validators.required, Validators.maxLength(8000)]],
      tags: [null, Validators.maxLength(256)],
      imageUrl: [null, Validators.maxLength(256)],
      isPublished: [false]
    });
  }

  private getPost(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id: number = +params.get("id");
        this.loading = true;
        return this.postService.getPost(id);
      })
      .subscribe(post => {
        if (!post) {
          this.router.navigate(['/404']);
          return;
        }

        this.authenticationService.currentUser$
          .subscribe(user => {
            // go to home page if user has logged out or do not have rights to edit this post
            let canModify = this.authorizationService.canModifyPost(post, user);
            if (!canModify) {
              this.router.navigate(['/']);
            }
          });

        this.loading = false;
        this.post = post;
        this.ckEditorContent = post.content;

        this.form.setValue({
          title: post.title,
          imageUrl: post.imageUrl,
          excerpt: post.excerpt,
          content: post.content,
          tags: post.tags.join(','),
          isPublished: post.isPublished
        });
      },
      (err: any) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          this.alertService.error(err.error.message, true);
          this.router.navigate(['/']);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.body.error}`);

          if (err.status === 404) {
            this.router.navigate(['/404']);
          }
          else {
            this.alertService.error(err.body.error, true);
            this.router.navigate(['/']);
          }
        }
      });
  }

  private subscribeOnPostDeleted() {
    this.postService.postDeleted$
      .subscribe(id => {
        if (this.post && this.post.id === id) {
          this.router.navigate(['/']);
        }
      });
  }

  private destroyEditor() {
    for (let name in CKEDITOR.instances) {
      CKEDITOR.instances[name].destroy(true);
    }
  }
}
