import { Injectable } from '@angular/core';
import { Rental } from 'src/app/models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalFieldTransferService {

  constructor() { }
  carId: number;
  customerId: number = 3;

  setCarId(carId: number) {
    this.carId = carId;
  }

  setCustomerId(customerId: number){
    this.customerId = customerId;
  }

  getCarId(){
    return Number(this.carId);
  }

  getCustomerId(){
    return this.customerId;
  }

}
