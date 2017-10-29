import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExcerptComponent } from './post-excerpt.component';

describe('PostExcerptComponent', () => {
  let component: PostExcerptComponent;
  let fixture: ComponentFixture<PostExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
