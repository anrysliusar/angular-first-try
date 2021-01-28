import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  chosenUser: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
      this.chosenUser = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

  getPostsOfUser(): void {
    this.router.navigate(['posts'], {
      relativeTo: this.activatedRoute,
      state: this.chosenUser
    });
  }
}
