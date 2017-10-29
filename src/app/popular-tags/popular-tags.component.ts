import { Component, OnInit } from '@angular/core';

import { TagInfo } from './../models/tag-info';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  tags: TagInfo[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPopularTags();
  }

  private getPopularTags(): void {
    this.postService.getPopularTags()
      .then(tags => this.tags = tags);
  }
}
