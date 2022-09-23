import { Pipe, PipeTransform } from '@angular/core';
import { CarComponent } from '../components/car/car.component';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    filterText = filterText?filterText.toLocaleUpperCase():""
    return filterText? value
    .filter((c:Car)=> c.modelName.toLocaleUpperCase().indexOf(filterText) !== -1)
    :value; 
    
  }

}
