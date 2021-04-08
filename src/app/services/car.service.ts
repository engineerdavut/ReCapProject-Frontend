import { ListResponseModule } from './../models/listResponseModule';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44302/api/";

  constructor(private httpClient:HttpClient) { }
  getCar():Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl+"recaps/getall";
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarByBrandId(brandId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl+"recaps/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
  getCarByColorId(colorId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl+"recaps/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

}
