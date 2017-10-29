import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninReactiveComponent } from './signin-reactive.component';

describe('SigninReactiveComponent', () => {
  let component: SigninReactiveComponent;
  let fixture: ComponentFixture<SigninReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
