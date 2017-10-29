import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from './../models/comment';
import { AuthenticationService } from './../services/authentication.service';
import { AuthorizationService } from './../services/authorization.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();
  canModify: Observable<boolean>;

  constructor(
    private authorizationService: AuthorizationService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUser$
      .subscribe(user => {
        this.canModify = Observable.of<boolean>(this.authorizationService.canModifyComment(this.comment, user));
      });
  }

  confirmDeleting() {
    if (confirm("Are you sure to delete the comment?")) {
      this.deleteComment.emit(true);
    }
  }
}
