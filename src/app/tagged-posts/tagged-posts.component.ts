import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { Post } from './../models/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-tagged-posts',
  templateUrl: './tagged-posts.component.html',
  styleUrls: ['./tagged-posts.component.scss']
})
export class TaggedPostsComponent implements OnInit {
  posts: Post[];
  tag: string;
  loading: boolean;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const tag: string = params.get("tag");
        this.tag = tag;

        this.loading = true;
        return this.postService.getPostsByTag(tag);
      })
      .subscribe(posts => {
        this.posts = posts;
        this.loading = false;
      });
  }
}
