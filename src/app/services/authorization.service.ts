import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../models/user';
import { Post } from './../models/post';
import { Comment } from './../models/comment';

@Injectable()
export class AuthorizationService {

  constructor() { }

  canModifyPost(post: Post, currentUser: User): boolean {
    console.log('canModifyPost' + JSON.stringify(currentUser));
    return currentUser !== null && post !== null && currentUser.username === post.userName;
  }

  canModifyComment(comment: Comment, currentUser: User): boolean {
    return currentUser !== null && comment !== null && currentUser.username === comment.username;
  }

  canAddComment(currentUser: User): boolean {
    return currentUser !== null;
  }
}
