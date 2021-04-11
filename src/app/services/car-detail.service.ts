import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44302/api/";
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"recaps/getCarDetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"recaps/getcardetailbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
