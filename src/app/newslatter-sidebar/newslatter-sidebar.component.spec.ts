import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslatterSidebarComponent } from './newslatter-sidebar.component';

describe('NewslatterSidebarComponent', () => {
  let component: NewslatterSidebarComponent;
  let fixture: ComponentFixture<NewslatterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslatterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslatterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
