import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { CarResponseModule } from '../models/carResponseModule';
import { CarDetailResponseModule } from '../models/carDetailResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44302/api/recaps/getall";
  apiUrl1="https://localhost:44302/api/recaps/getCarDetails";
  constructor(private httpClient:HttpClient) { }
  getCar():Observable<CarResponseModule>{
    return this.httpClient.get<CarResponseModule>(this.apiUrl);
  }
  getCarDetails():Observable<CarDetailResponseModule>{
    return this.httpClient.get<CarDetailResponseModule>(this.apiUrl1);
  }
}
