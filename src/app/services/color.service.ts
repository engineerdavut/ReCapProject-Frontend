import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Color } from '../models/color';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44302/api/colors/getall"
  constructor(private httpClient:HttpClient) { }
  getColor():Observable<ListResponseModule<Color>>{
    return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl);
  }
}
