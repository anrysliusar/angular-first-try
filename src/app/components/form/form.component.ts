import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {usersArr} from '../../../db/users';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users: User[] = usersArr;
  name: string;
  surname: string;
  age: number;
  email: string;

  // name = new FormControl();
  // surname = new FormControl();
  // age = new FormControl();
  // email = new FormControl();
  // contactForm = new FormGroup({
  //   name: this.name,
  //   surname: this.surname,
  //   age: this.age,
  //   email: this.email
  // });

  constructor() {
  }

  ngOnInit(): void {

  }

  contactFormSubmit(ngForm): void {
    this.users.push({
      name: ngForm.value.name,
      surname: ngForm.value.surname,
      age: ngForm.value.age,
      email: ngForm.value.email
    });
  }

  // contactFormSubmit(): void {
  //   this.users.push({
  //     name: this.contactForm.value.name,
  //     surname: this.contactForm.value.surname,
  //     age: this.contactForm.value.age,
  //     email: this.contactForm.value.email
  //   });
  // }
}
