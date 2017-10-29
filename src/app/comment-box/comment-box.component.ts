import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { PostService } from './../services/post.service';
import { CommentService } from './../services/comment.service';
import { AuthorizationService } from './../services/authorization.service';
import { AuthenticationService } from './../services/authentication.service';
import { Post } from './../models/post';
import { Comment } from './../models/comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit, OnChanges {
  loading: boolean;
  comments: Comment[];
  commentControl: FormControl;
  isSubmitAttempt: boolean;
  commentCount: number = 0;
  @Input() post: Post;
  canAddComment: Observable<boolean>;

  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService) {

    this.commentControl = new FormControl(null, [Validators.required, Validators.maxLength(1024)])
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // In case the post is Observable in parent conponent, then post will be null at ngOnInit hoock, so it's needed to catch it here
    var postChange = changes['post'];
    if (postChange != null && postChange.currentValue != null) {
      const post: Post = postChange.currentValue;
      this.populateComments(post.id);
    }
  }

  isControlInvalid() {
    return !this.commentControl.valid && (this.commentControl.dirty || this.isSubmitAttempt);
  }

  addComment() {
    this.isSubmitAttempt = true;

    if (!this.commentControl.valid) {
      return;
    }

    let newComment: Comment = this.prepareSaveComment();

    if (newComment == null) {
      console.log('No comment to save');
      return;
    }

    this.loading = true;
    this.commentService.addPostComment(newComment)
      .mergeMap(comment => {
        return this.postService.incrementCommentsCount(comment.relatedEntityId)
          .map(x => comment);
      })
      .finally(() => {
        this.loading = false;
        this.isSubmitAttempt = false;
      })
      .subscribe((comment) => {
        this.comments.unshift(comment);
        this.commentControl.reset('');
      },
      (err: any) => {
        console.log(JSON.stringify(err));
      });
  }

  onDeleteComment(comment: Comment) {
    this.commentService.deleteComment(comment.id)
      .mergeMap((x) => {
        return this.postService.decrementCommentsCount(comment.relatedEntityId)
          .map(x => x);
      })
      .subscribe(() => {
        this.comments = this.comments.filter((item) => item.id !== comment.id);
      },
      (error: any) => {
        console.log('An error occurred:', JSON.stringify(error));
      });
  }

  private prepareSaveComment(): Comment {
    const user = this.authenticationService.getCurrentUser();
    if (user == null) {
      this.router.navigate(['/404']);
    }

    const saveComment: Comment = {
      datePublished: new Date(),
      text: (this.commentControl.value as string).trim(),
      username: user.username,
      relatedEntityType: 'post',
      relatedEntityId: this.post.id,
      likesCount: 0,
      avatarImageUrl: user.avatarImageUrl
    };

    return saveComment;
  }

  private populateComments(postId: number) {
    this.commentService.getCommentsForEntity('post', postId)
      .subscribe(comments => {
        this.comments = comments;
        this.commentCount = comments.length;

        this.authenticationService.currentUser$
          .subscribe(user =>
            this.canAddComment = Observable.of<boolean>(this.authorizationService.canAddComment(user)));
      },
      (error: any) => {
        console.log('An error occurred:', JSON.stringify(error));
      });
  }
}
