import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './components/all-users/user/user.component';
import { UsersComponent } from './components/all-users/users/users.component';
import { FullUserComponent } from './components/all-users/full-user/full-user.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/all-cars/car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FullUserComponent,
    HomeComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'users', component: UsersComponent, children: [{
          path: ':id', component: FullUserComponent
        }]
      },
      {
        path: 'home', component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
