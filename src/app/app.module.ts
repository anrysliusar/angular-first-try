import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UserComponent} from './components/all-users/user/user.component';
import {UsersComponent} from './components/all-users/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostComponent} from './components/all-posts/post/post.component';
import {FullUserComponent} from './components/all-users/full-user/full-user.component';
import {PostsComponent} from './components/all-posts/posts/posts.component';
import {PostResolveService, UserResolveService} from './services/resolve';
import {FullPostComponent} from './components/all-posts/full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [{
  path: 'home', component: HomeComponent,
  children: [{
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [{
      path: ':id', component: FullUserComponent,
      children: [{
        path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService},
        children: [{
          path: ':id', component: FullPostComponent
        }]
      }]
    }]
  }]
}];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    HomeComponent,
    PostComponent,
    FullUserComponent,
    PostsComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
