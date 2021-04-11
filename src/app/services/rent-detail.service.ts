import { RentalsDetail } from './../models/rentalsDetail';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { RentDetail } from '../models/rentDetail';


@Injectable({
  providedIn: 'root'
})
export class RentDetailService {
  apiUrl="https://localhost:44302/api/rentdetails/getall";
  apiUrl1="https://localhost:44302/api/rentdetails/getRentalsDetail";
  constructor(private httpClient:HttpClient) { }
  getRentDetail():Observable<ListResponseModel<RentDetail>>{
    return this.httpClient.get<ListResponseModel<RentDetail>>(this.apiUrl);
  }
  getRentalsDetail():Observable<ListResponseModel<RentalsDetail>>{
    return this.httpClient.get<ListResponseModel<RentalsDetail>>(this.apiUrl1);
  }
}
