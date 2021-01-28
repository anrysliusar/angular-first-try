import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{
  constructor(private userService: UserService) { }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }
}
