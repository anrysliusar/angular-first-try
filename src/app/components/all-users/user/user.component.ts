import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input()
  user: User;

  ngOnInit(): void {
  }

}
