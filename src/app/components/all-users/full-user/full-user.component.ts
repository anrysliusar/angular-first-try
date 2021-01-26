import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {usersWithAddress} from '../../../../db/usersData';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  users = usersWithAddress;
  chosenUserId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.chosenUserId = value.id);
  }

  ngOnInit(): void {
  }
}
