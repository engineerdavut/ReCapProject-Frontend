import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { iif } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dateLoaded = true;
  cars: Car[] = [];
  filterText = '';
  currentBrand:Brand;
  brands:Brand[];
  colors:Color[];
  currentColor:Color;
  currentCar: Car;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService:BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //this.getCar();
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] ) {
        this.getCarByColorId(params['colorId']);
      } else if (params['brandId'] ) {
        this.getCarByBrandId(params['brandId']);
      } else if ( this.currentBrand) {

        this.getCarByBrandId(this.currentBrand.brandId);
      } else if ( this.currentColor) {

        this.getCarByColorId(this.currentColor.colorId);
      }else {
        this.getCar();

      }
      console.log("csdfgdf");
      this.getBrand();
      console.log(this.currentBrand);

      this.getColor();
    });
    //this.getcars();
  }
  getCar() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response.data;
      this.dateLoaded = true;
    });
  }
  getColor() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
      this.dateLoaded = true;
    });
  }
  getBrand() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.dateLoaded = true;
    });
  }


  getCarByBrandId(brandId: number) {
    this.carService.getCarByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarByColorId(colorId: number) {
    this.carService.getCarByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;

  }
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }
  getCurrentCarClass(car: Car) {
    if (car == this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllCarClass() {
    if (!this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  addToCart(car: Car) {
    console.log(car);
    if (car.carId === 1) {
      this.toastrService.error(car.carName + ' bu araç kiralandı.Kiralanamaz.');
    } else {
      this.toastrService.success(car.carName + ' bu aracı kiralayın.');
      this.cartService.addToCart(car);
    }
  }
}
