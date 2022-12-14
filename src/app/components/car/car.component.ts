import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
  cars:Car[] = [] 
  dataLoaded = false;
  constructor(private carService:CarService, 
    private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(params=>{
        if(params["colorId"]){
           this.getCarsByColor(params["colorId"])
        }
        else if (params["brandId"]){
          this.getCarsByBrand(params["brandId"])
        }
        else{
          this.getCars()
        }  
    })
  }

  getCars(){
     this.carService.getCars().subscribe(response=>{
          this.cars=response.data
          this.dataLoaded=true;
     })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
         this.cars=response.data
         this.dataLoaded=true;
    })
 }

 getCarsByColor(colorId:number){
  this.carService.getCarsByColor(colorId).subscribe(response=>{
       this.cars=response.data
       this.dataLoaded=true;
  })
}

}
