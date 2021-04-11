import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44302/api/";

  constructor(private httpClient:HttpClient) { }
  getCar():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"recaps/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"recaps/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"recaps/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"recaps/add",car);
  }
  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"recaps/update",car);
  }

}
