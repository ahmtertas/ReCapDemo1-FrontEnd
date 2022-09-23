import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { SingleResponseModel } from 'src/app/models/singleResponseModal';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { DateTimeService } from 'src/app/services/datetimeservices.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetaildto',
  templateUrl: './cardetaildto.component.html',
  styleUrls: ['./cardetaildto.component.css']
})
export class CardetaildtoComponent implements OnInit {

  carDetailDtos:Car[] = [];
  dataLoaded =  false;
  filterText=""
  crId:number = 2;
  
  constructor(
    private carDetailDtoService:CarService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndByBrand(params["colorId"],params["brandId"])
      }
      
      else if (params["brandId"]) {
        this.getCarDetailByBrandId(params["brandId"])
      }
      
      else if(params["colorId"]) {
        this.getCarDetailByColorId(params["colorId"])
      }
      else {
        this.getCarDetailDto();
      }
    })
  }
  getCarDetailDto(){
    this.carDetailDtoService.getCars().subscribe(response => {
      this.carDetailDtos = response.data;
      console.log(response)
      this.dataLoaded = true;
    })
  }
  getCarDetailByColorId(colorId:number){
    this.carDetailDtoService.getCarsByColor(colorId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailByBrandId(brandId:number){
    this.carDetailDtoService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  
  getCarDetailByColorAndByBrand(colorId:number,  brandId:number){
    this.carDetailDtoService.getCarDetailByColorAndByBrand(colorId, brandId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }

  

  

}
