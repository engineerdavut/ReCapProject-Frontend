import { LoginGuard } from './guards/login.guard';
import { Car } from 'src/app/models/car';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { BrandlistComponent } from './components/brandlist/brandlist.component';
import { ColorlistComponent } from './components/colorlist/colorlist.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"carDetail/car/:carId",component:CarDetailComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"brands/update/:brandId",component:BrandUpdateComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},
  {path:"cars/all",component:CarlistComponent},
  {path:"brands/all",component:BrandlistComponent},
  {path:"colors/all",component:ColorlistComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
