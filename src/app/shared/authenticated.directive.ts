import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';

@Directive({
  selector: '[authenticated]'
})
export class AuthenticatedDirective implements OnInit {
  renderCondition: boolean = true;

  constructor(private authenticationService: AuthenticationService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,) { }
  
  ngOnInit(): void {
    this.authenticationService.isAuthenticated$
      .subscribe(isAuthenticated => {
        if (isAuthenticated && this.renderCondition || !isAuthenticated && !this.renderCondition) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } 
        else {
          this.viewContainerRef.clear();
        }
      })
  }

  @Input() set authenticated(renderCondition: boolean | null) {
    if(renderCondition != null) {
      this.renderCondition = renderCondition;
    }
  }
}
