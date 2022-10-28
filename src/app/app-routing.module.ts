import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  //{ path: 'cars/cardetail/:carId', component: CarComponent },
  { path: 'cars/cardetail/:carId', component: CarDetailPageComponent },
  { path: 'cars/rental/add', component: RentalAddComponent },
  { path: 'cars/rentals', component: RentalComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'brands/add', component: BrandAddComponent},
  { path: 'colors/add', component: ColorAddComponent},
  { path: 'cars/add', component: CarAddComponent},
  { path: 'brands/update', component: BrandUpdateComponent},
  { path: 'colors/update', component: ColorUpdateComponent},
  { path: 'cars/update', component: CarUpdateComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
