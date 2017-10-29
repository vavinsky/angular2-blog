import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      search: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.searchForm.valid) {
      return;
    }
    let searchTerm = this.searchForm.get('search').value;
    this.router.navigate(['search', searchTerm]);

    this.searchForm.patchValue({ 'search': null });
  }
}
