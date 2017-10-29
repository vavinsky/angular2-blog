import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

import { Post } from './../models/post';
import { Tag } from './../models/tag';
import { TagInfo } from './../models/tag-info';
import { AlertService } from './alert.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PostService {
  private postsUrl = 'api/posts';
  private tagsUrl = 'api/tags';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertService: AlertService) { }

  getPublishedPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl)
      .retry(3)
      .map((data) => {
        data.sort((a, b) => {
          if (a.datePublished && b.datePublished) {
            return a.datePublished < b.datePublished ? 1 : -1;
          }
          else {
            return a.dateUpdated < b.dateUpdated ? 1 : -1;
          }
        });
        return data;
      })
      .toPromise()
      .catch(this.handleError)
      .then(posts => posts.filter(post => post.isPublished));
  }

  getUserPosts(username: string): Promise<Post[]> {
    return this.httpClient.get<Post[]>(`${this.postsUrl}/?userName=${username}`)
      .retry(3)
      .map((data) => {
        data.sort((a, b) => {
          return a.dateUpdated < b.dateUpdated ? 1 : -1;
        });
        return data;
      })
      .toPromise()
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.postsUrl}/${id}`)
      .retry(3);
  }

  searchPosts(term: string): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${this.postsUrl}/?title=${term}`);
  }

  getPostsByTag(tag: string): Promise<Post[]> {
    return this.getPublishedPosts()
      .then(post => post.filter(post => post.tags.includes(tag)));
  }

  updatePost(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.httpClient
      .put(url, post, cudOptions)
      .toPromise()
      .then(() => post)
      .catch(this.handleError);
  }

  deletePost(id: number): Promise<void> {
    const url = `${this.postsUrl}/${id}`;
    return this.httpClient.delete(url, cudOptions)
      .toPromise()
      .catch(this.handleError);
  }

  createPost(post: Post): Promise<Post> {
    post.commentsCount = 0;
    return this.httpClient
      .post(this.postsUrl, post, cudOptions)
      .toPromise()
      .then(res => res as Post)
      .catch(this.handleError);
  }

  incrementCommentsCount(postId: number): Observable<Post> {
    const url = `${this.postsUrl}/${postId}`;

    return this.getPost(postId)
      .mergeMap(post => {
        post.commentsCount = post.commentsCount + 1;
        return this.httpClient
          .put<Post>(url, post, cudOptions)
      })
  }

  decrementCommentsCount(postId: number): Observable<Post> {
    const url = `${this.postsUrl}/${postId}`;

    return this.getPost(postId)
      .mergeMap(post => {
        post.commentsCount = post.commentsCount - 1;
        if (post.commentsCount < 0) {
          post.commentsCount = 0;
        }
        return this.httpClient
          .put<Post>(url, post, cudOptions)
      })
  }

  getPopularTags(): Promise<TagInfo[]> {
    return this.getPublishedPosts()
      .then(posts => {
        let tags = posts
          .map(post => post.tags)
          .reduce((prev, current) => prev.concat(current));// or we can use [...prev, ... current])

        // gather statistics how many duplicate tags we have. it's most popular tags
        let statistic = {};
        tags.forEach(x => statistic[x] = (statistic[x] || 0) + 1);

        // filter duplicates and sort with descent order
        return tags.filter((value, index, array) => array.indexOf(value) === index)
          .sort((a, b) => {
            return statistic[b] - statistic[a];
          })
          .map(tag => {
            return { 
              name: tag,
              postCount: statistic[tag]
            };
          })
      });
  }

  getTags(): Promise<Tag[]> {
    return this.httpClient.get<Tag[]>(this.tagsUrl)
      .retry(2)
      .toPromise()
      .catch(this.handleError);
  }

  getTag(name: string): Promise<Tag> {
    return this.httpClient
      .get<Tag[]>(`${this.tagsUrl}/?name=${name}`)
      .retry(2)
      .toPromise()
      .then(posts => {
        return posts ? posts[0] : null;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

