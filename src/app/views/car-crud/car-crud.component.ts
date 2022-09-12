import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-car-crud',
  templateUrl: './car-crud.component.html',
  styleUrls: ['./car-crud.component.css']
})
export class CarCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    )
    {
      headerService.headerData = {
        title: 'Cadastro de veículos',
        icon: 'directions_car',
        routeUrl: '/cars'
      }
    }

  ngOnInit(): void {
  }

  navigateToCarCreate(): void {
    this.router.navigate(['/cars/create'])
  }

}
