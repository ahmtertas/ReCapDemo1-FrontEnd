import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetaildtoComponent } from './components/cardetaildto/cardetaildto.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CardetaildtoComponent},
  {path:"cardetails", component:CardetaildtoComponent},
  {path:"cardetails/brand/:brandId", component:CardetaildtoComponent},
  {path:"cardetails/color/:colorId", component:CardetaildtoComponent},
  {path:"car/:carId", component:OneCarDetailComponent},
  {path:"colors", component:ColorComponent},
  {path:"carlist", component:CarComponent},
  {path:"rental-list", component:RentalComponent},
  {path:"cars/color/:colorId/brand/:brandId", component:CardetaildtoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
