import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { CardetaildtoComponent } from './components/cardetaildto/cardetaildto.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { FilterCarComponent } from './components/filter-car/filter-car.component';


import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarImageComponent,
    OneCarDetailComponent,
    CardetaildtoComponent,
    FilterPipePipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    FooterComponent,
    FilterCarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
