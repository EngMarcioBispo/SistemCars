import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from './../car.model'

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  cars: Cars = {
  placa: "",
  chassi: "",
  renavam: "",
  modelo: "",
  marca: "",
  ano: ""
  }

  constructor(private carService: CarsService, private router: Router) { }

  ngOnInit(): void {

  }
  createCar(): void {
    this.carService.create(this.cars).subscribe(()=>{
      this.carService.showMessage('Cadastro realizado com sucesso!')
      this.router.navigate(['/cars'])
    })


  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }
}
