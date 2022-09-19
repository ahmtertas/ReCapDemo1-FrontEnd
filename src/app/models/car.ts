import { CarImage } from "./carImage";

export interface Car{
    id:number;
    brandName:string;
    modelName:string;
    colorName:string;
    modelYear:number;
    gear:string;    
    dailyPrice:number;
    description:string;
    imagePath:string[];
}