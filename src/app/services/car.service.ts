import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44383/api/cars/getdetailsdto';

  constructor(private httpCient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
     return this.httpCient.get<CarResponseModel>(this.apiUrl) 
  }
}
