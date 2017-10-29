import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostService } from './../services/post.service';
import { Tag } from './../models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tag: Tag;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const tagName: string = params.get('tag');
        return this.postService.getTag(tagName);
      })
      .subscribe(tag => {
        if (!tag) {
          this.router.navigate(['/404']);
          return;
        }

        this.tag = tag
      });
  }

  goBack(): void {
    this.location.back();
  }
}
