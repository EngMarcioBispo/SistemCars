import { ActivatedRoute } from '@angular/router';
import { Cars } from './../car.model';
import { Router } from '@angular/router';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  cars!: Cars

  constructor(
    private carService: CarsService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const iD = this.route.snapshot.paramMap.get("id");
    this.carService.readById(iD!).subscribe((cars) => {
      this.cars = cars
    })
    }

  updateCar(): void {
    this.carService.update(this.cars).subscribe(() =>{
      this.carService.showMessage('Veículo atualizado com sucesso!');
      this.router.navigate(['/cars'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}
