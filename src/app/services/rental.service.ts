import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDtoResponseModel } from '../models/rentalDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  appUrl = 'https://localhost:44383/api/rentals/getdetailsdto';

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalDtoResponseModel>{
    return this.httpClient.get<RentalDtoResponseModel>(this.appUrl)
  }
}
