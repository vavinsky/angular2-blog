import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './shared/authentication.guard';
import { NoAuthenticationGuard } from './shared/no-authentication.guard';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { SigninReactiveComponent } from './signin-reactive/signin-reactive.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { TagsComponent } from './tags/tags.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'my-posts',  component: PostsComponent, canActivate: [AuthenticationGuard], data: {currentUserPosts: true} },
  { path: 'posts',  component: PostsComponent },
  { path: 'post/add', component: PostEditComponent, canActivate: [AuthenticationGuard] },
  { path: 'posts/tag/:tag',  component: PostsComponent, data: {showPostsByTag: true} },
  { path: 'post/:id/edit', component: PostEditComponent, canActivate: [AuthenticationGuard] },
  { path: 'post/:id', component: PostComponent },
  { path: 'tags', component: TagsComponent, canActivate: [AuthenticationGuard] },
  { path: 'tag/:tag', component: TagComponent },
  { path: 'signin', component: SigninReactiveComponent, canActivate: [NoAuthenticationGuard] },
  { path: 'signup', component: SignupReactiveComponent, canActivate: [NoAuthenticationGuard]},
  { path: 'search/:term', component: PostSearchComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
