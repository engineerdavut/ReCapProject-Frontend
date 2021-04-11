import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44302/api/";

  constructor(private httpClient:HttpClient) { }
  getBrand():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand);
  }
  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand);
  }

  getBrandById(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"GetBrandById?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
