import { RentalsDetail } from './../../models/rentalsDetail';
import { Component, OnInit } from '@angular/core';
import { RentDetail } from 'src/app/models/rentDetail';
import { RentDetailService } from 'src/app/services/rent-detail.service';

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css']
})
export class RentDetailComponent implements OnInit {
  rentDetails:RentDetail[]=[];
  rentalsDetails:RentalsDetail[]=[];
  constructor(private rentDetailService:RentDetailService) { }

  ngOnInit(): void {
    //this.getRentDetail();
    this.getRentalsDetail();
  }
  getRentDetail(){
    this.rentDetailService.getRentDetail().subscribe(
      response=>{
        this.rentDetails=response.data
      }
    )
  }
  getRentalsDetail(){
    this.rentDetailService.getRentalsDetail().subscribe(
      response=>{
        this.rentalsDetails=response.data
      }
    )
  }

}
