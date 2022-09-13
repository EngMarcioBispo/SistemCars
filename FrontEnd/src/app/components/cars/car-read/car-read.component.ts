import { CarsService } from './../cars.service';
import { Cars } from './../car.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  cars!: Cars[]
  displayedColumns = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'action']

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.carService.read().subscribe(cars =>{
      this.cars = cars
    })
  }
}
