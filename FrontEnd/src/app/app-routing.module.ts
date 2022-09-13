import { CarDeleteComponent } from './components/cars/car-delete/car-delete.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { CarCreateComponent } from './components/cars/car-create/car-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarCrudComponent } from './views/car-crud/car-crud.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"cars",
    component: CarCrudComponent
  },
  {
    path:"cars/create",
    component: CarCreateComponent
  },
  {
    path:"cars/update/:id",
    component: CarUpdateComponent
  },
  {
    path:"cars/delete/:id",
    component: CarDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
