import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorResponseModule } from '../models/colorResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44302/api/colors/getall"
  constructor(private httpClient:HttpClient) { }
  getColor():Observable<ColorResponseModule>{
    return this.httpClient.get<ColorResponseModule>(this.apiUrl);
  }
}
