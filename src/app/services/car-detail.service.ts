import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModule } from '../models/listResponseModule';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44302/api/";
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<ListResponseModule<CarDetail>>{
    let newPath=this.apiUrl+"recaps/getCarDetails";
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarByCarId(carId:number):Observable<ListResponseModule<CarDetail>>{
    let newPath=this.apiUrl+"recaps/getcardetailbyid?carId="+carId;
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
}
