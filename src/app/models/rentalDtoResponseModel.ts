import { ResponseModel } from "./responseModel";
import {RentalDto} from "./rentalDto"


export interface RentalDtoResponseModel extends ResponseModel {
         data:RentalDto[]
}