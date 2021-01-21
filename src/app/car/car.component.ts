import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: {model: string, yearOfIssue: number, powerful: number, colour: string, isCrashed: boolean};

  constructor() { }

  ngOnInit(): void {
  }

}
