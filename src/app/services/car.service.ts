import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44383/api/';


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetailsdto"
     return this.httpClient.get<ListResponseModel<Car>>(newPath) 
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbycarid?carid=" + carId;
     return this.httpClient.get<ListResponseModel<Car>>(newPath) 
  }


  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath) 
  }


  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath) 
  }

  getCarDetailByColorAndByBrand(colorId:number, brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorandbybrand?colorId=' + colorId + '&brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
    
}
