import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from './../../services/car-detail.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[]=[];
  currentCarDetails:CarDetail;
  imagePath="https://localhost:44302";
  defaultlogo="/images/defaultlogo.png";

  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarByCarId(params["carId"]);
      }

    })
  }
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(
      response=>{
        this.carDetails=response.data;
        this.currentCarDetails=response.data[0]
        console.log(this.currentCarDetails);
      }
    )
  }
  getCarByCarId(carId:number){
    this.carDetailService.getCarByCarId(carId).subscribe(
      response=>{
        this.carDetails=response.data
        this.currentCarDetails=response.data[0]
        console.log(this.currentCarDetails);
      }
    )
  }
  setCarouselItemClass(imagePath:string){
    if(imagePath === this.currentCarDetails.image[0]){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }


}
