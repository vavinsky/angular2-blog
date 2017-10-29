import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

import { AlertService } from './alert.service';
import { Comment } from './../models/comment';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CommentService {
  private commentsUrl = 'api/comments';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertService: AlertService) { }

  getAllComments(entityType: string): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${this.commentsUrl}/?relatedEntityType=${entityType}`)
      .catch(this.handleError);
  }

  getCommentsForEntity(entityType: string, entityId: number): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${this.commentsUrl}/?relatedEntityType=${entityType}&&relatedEntityId=${entityId}`)
      .catch(this.handleError);
  }

  deleteComment(comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment : comment.id;
    const url = `${this.commentsUrl}/${id}`;

    return this.httpClient.delete<Comment>(url, cudOptions)
      .map(() => comment)
      .catch(this.handleError);
  }

  addPostComment(comment: Comment): Observable<Comment> {
    comment.relatedEntityType = 'post';

    return this.httpClient
      .post<Comment>(this.commentsUrl, comment, cudOptions)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}