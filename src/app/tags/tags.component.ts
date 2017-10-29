import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { PostService } from './../services/post.service';
import { Tag } from './../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: Tag[];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPopularTags();
  }

  private getPopularTags(): void {
    this.postService.getTags().then(tags => this.tags = tags);
  }
}
