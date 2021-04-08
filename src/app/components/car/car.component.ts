import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { iif } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dateLoaded=true;
  cars:Car[]=[];

  currentCar:Car;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) {


  }

  ngOnInit(): void {
    //this.getCar();
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarByColorId(params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarByBrandId(params["brandId"]);
      }
      else{
        this.getCar();
      }
    })
    //this.getcars();
  }
  getCar(){
    this.carService.getCar().subscribe(
      response=>{
        this.cars=response.data;
        this.dateLoaded=true;
      }
    )
  }

  getCarByBrandId(brandId:number){
    this.carService.getCarByBrandId(brandId).subscribe(
      response=>{
        this.cars=response.data;
      }
    )

  }
  getCarByColorId(colorId:number){
    this.carService.getCarByColorId(colorId).subscribe(
      response=>{
        this.cars=response.data
      }
    )
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  getCurrentCarClass(car:Car){
    if(car==this.currentCar){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  getAllCarClass(){
    if(!this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
