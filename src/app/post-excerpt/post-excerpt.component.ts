import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './../models/post';

@Component({
  selector: 'app-post-excerpt',
  templateUrl: './post-excerpt.component.html',
  styleUrls: ['./post-excerpt.component.scss']
})
export class PostExcerptComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
}
