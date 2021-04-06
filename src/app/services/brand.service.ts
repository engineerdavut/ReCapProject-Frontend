import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BrandResponseModule } from '../models/brandResponseModule';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44302/api/brands/getall";

  constructor(private httpClient:HttpClient) { }
  getBrand():Observable<BrandResponseModule>{
    return this.httpClient.get<BrandResponseModule>(this.apiUrl);
  }
}
