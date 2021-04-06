import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentDetailResponseModule } from '../models/rentDetailResponseModule';
import { RentalsDetailResponseModule } from '../models/rentalsDetailResponseModule';

@Injectable({
  providedIn: 'root'
})
export class RentDetailService {
  apiUrl="https://localhost:44302/api/rentdetails/getall";
  apiUrl1="https://localhost:44302/api/rentdetails/getRentalsDetail";
  constructor(private httpClient:HttpClient) { }
  getRentDetail():Observable<RentDetailResponseModule>{
    return this.httpClient.get<RentDetailResponseModule>(this.apiUrl);
  }
  getRentalsDetail():Observable<RentalsDetailResponseModule>{
    return this.httpClient.get<RentalsDetailResponseModule>(this.apiUrl1);
  }
}
