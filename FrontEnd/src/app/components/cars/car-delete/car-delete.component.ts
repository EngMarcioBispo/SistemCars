import { Cars } from './../car.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  cars!: Cars

  constructor(
    private carService: CarsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const iD = this.route.snapshot.paramMap.get("id");
    this.carService.readById(iD!).subscribe((cars) => {
      this.cars = cars
    })
  }

  deleteCar(): void {
    const iD = this.route.snapshot.paramMap.get("id");
    this.carService.delete(iD!).subscribe(() =>{
      this.carService.showMessage('Veículo excluído com sucesso!');
      this.router.navigate(['/cars'])
    })
}

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}
