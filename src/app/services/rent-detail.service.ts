import { RentalsDetail } from './../models/rentalsDetail';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModule';
import { RentDetail } from '../models/rentDetail';


@Injectable({
  providedIn: 'root'
})
export class RentDetailService {
  apiUrl="https://localhost:44302/api/rentdetails/getall";
  apiUrl1="https://localhost:44302/api/rentdetails/getRentalsDetail";
  constructor(private httpClient:HttpClient) { }
  getRentDetail():Observable<ListResponseModule<RentDetail>>{
    return this.httpClient.get<ListResponseModule<RentDetail>>(this.apiUrl);
  }
  getRentalsDetail():Observable<ListResponseModule<RentalsDetail>>{
    return this.httpClient.get<ListResponseModule<RentalsDetail>>(this.apiUrl1);
  }
}
