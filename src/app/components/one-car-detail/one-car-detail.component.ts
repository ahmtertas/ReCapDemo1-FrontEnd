import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  oneCarDetailDto:Car[]= [];

  dataLoaded =  false;
  constructor(
    private carDetailDtoService:CarService,
    private activatedRoute:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carDetailDtoService.getCarDetailsByCarId(carId).subscribe(response => {
      this.oneCarDetailDto = response.data;
    })
  }

}
