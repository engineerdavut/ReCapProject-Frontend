import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModule } from '../models/listResponseModule';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44302/api/brands/getall";

  constructor(private httpClient:HttpClient) { }
  getBrand():Observable<ListResponseModule<Brand>>{
    return this.httpClient.get<ListResponseModule<Brand>>(this.apiUrl);
  }
}
