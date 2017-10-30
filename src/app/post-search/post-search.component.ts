import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PostService } from './../services/post.service';
import { Post } from './../models/post';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  posts: Observable<Post[]>;
  postsLenght: number;
  searchBoxControl: FormControl;
  loading: boolean;
  private searchTerms = new Subject<string>();
  private searchTerm: string;

  get showNoResults() {
    return !this.loading && this.postsLenght <= 0 && this.searchBoxControl.value;
  }

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {

    this.searchBoxControl = new FormControl(null);

    this.searchBoxControl.valueChanges.subscribe(value => {
      this.search(value);
    })
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.postService.postDeleted$
      .subscribe(id => this.searchBoxControl.setValue(null));

    this.subscribeToSearchBoxChanges();
    this.subscribeToRouteChanges();
  }

  subscribeToRouteChanges() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const term: string = params.get("term");
        this.searchTerm = term;

        setTimeout(() => {
          this.searchBoxControl.setValue(this.searchTerm);
          this.search(this.searchTerm);
        }, 0);
      });
  }

  subscribeToSearchBoxChanges() {
    this.posts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => {
        if (!term) {
          this.searchBoxControl.setValue(null);

          // the observable of empty posts if there was no search term
          return Observable.of<Post[]>([]);
        }

        // switch to new observable each time the term changes
        // return the http search observable
        this.loading = true;
        return this.postService.searchPosts(term)
          .finally(() => this.loading = false);
      })
      .catch(error => {
        console.log(error);
        this.searchBoxControl.setValue(null);
        return Observable.of<Post[]>([]);
      });

    this.posts.subscribe(result => {
      this.postsLenght = result.length;
    });
  }
}
