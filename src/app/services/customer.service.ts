import { Observable } from 'rxjs';
import { CustomerResponseModule } from './../models/CustomerResponseModule';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44302/api/customers/getall";
  constructor(private httpClient:HttpClient) { }
  getCustomer():Observable<CustomerResponseModule>{
    return this.httpClient.get<CustomerResponseModule>(this.apiUrl);
  }
}
