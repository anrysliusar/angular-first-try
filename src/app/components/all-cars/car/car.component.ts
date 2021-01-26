import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {cars} from '../../../../db/carsData';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  allCars = cars;

  @Input()
  userId: number;

  constructor() {
  }

  ngOnInit(): void {
  }
}
