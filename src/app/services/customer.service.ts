import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44302/api/customers/getall";
  constructor(private httpClient:HttpClient) { }
  getCustomer():Observable<ListResponseModule<Customer>>{
    return this.httpClient.get<ListResponseModule<Customer>>(this.apiUrl);
  }
}
