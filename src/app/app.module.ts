import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { KeepHtmlPipe } from './shared/keep-html.pipe';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuard } from './shared/authentication.guard';
import { NoAuthenticationGuard } from './shared/no-authentication.guard';
import { AuthorizationInterceptor } from './shared/authorization.interceptor';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { PostService } from './services/post.service';
import { EqualValidator } from './shared/equal-validator.directive';
import { JwtService } from './services/jwt.service';
import { AuthorizationService } from './services/authorization.service';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { PostExcerptComponent } from './post-excerpt/post-excerpt.component';
import { PostsComponent } from './posts/posts.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { TagsComponent } from './tags/tags.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { BlogPaginationComponent } from './blog-pagination/blog-pagination.component';
import { PostComponent } from './post/post.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { TaggedPostsComponent } from './tagged-posts/tagged-posts.component';
import { TagComponent } from './tag/tag.component';
import { AlertComponent } from './shared/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { SigninReactiveComponent } from './signin-reactive/signin-reactive.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutSidebarComponent } from './about-sidebar/about-sidebar.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { NewslatterSidebarComponent } from './newslatter-sidebar/newslatter-sidebar.component';
import { CommentComponent } from './comment/comment.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { AuthenticatedDirective } from './shared/authenticated.directive';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    PostExcerptComponent,
    PostsComponent,
    BlogHeaderComponent,
    TagsComponent,
    PopularPostsComponent,
    BlogPaginationComponent,
    PostComponent,
    PopularTagsComponent,
    TaggedPostsComponent,
    TagComponent,
    AlertComponent,
    RegisterComponent,
    EqualValidator,
    SigninReactiveComponent,
    PostSearchComponent,
    SearchComponent,
    PageNotFoundComponent,
    AboutSidebarComponent,
    PostEditComponent,
    KeepHtmlPipe,
    NewslatterSidebarComponent,
    CommentComponent,
    CommentBoxComponent,
    AuthenticatedDirective,
    SignupReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 , passThruUnknownUrl: false}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  providers: [
    AuthorizationService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    AuthenticationService,
    AuthenticationGuard,
    NoAuthenticationGuard,
    PostService,
    UserService,
    CommentService,
    DatePipe,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
