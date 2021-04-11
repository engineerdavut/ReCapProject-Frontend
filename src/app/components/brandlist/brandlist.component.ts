import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {


  brands:Brand[]=[];
  constructor(private httpClient:HttpClient,private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }


  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data;
    })
  }

}
