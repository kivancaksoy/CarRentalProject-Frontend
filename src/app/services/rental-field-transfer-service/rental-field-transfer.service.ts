import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RentalFieldTransferService {
  constructor() {}
  carId: number;
  customerId: number = 3;
  rentalPrice: number;
  totalRentalPrice: number;
  rentDate: Date;
  returnDate: Date;

  rentalModel: any;

  setCarId(carId: number) {
    this.carId = carId;
  }

  setCustomerId(customerId: number) {
    this.customerId = customerId;
  }

  getCarId() {
    return Number(this.carId);
  }

  getCustomerId() {
    return this.customerId;
  }

  setRentalModel(rentalAddForm: any) {
    this.rentalModel = Object.assign({}, rentalAddForm.value);
  }

  getRentalModel() {
    return this.rentalModel;
  }

  setRentalPrice(rentalPrice: number) {
    this.rentalPrice = rentalPrice;
  }

  setTotalRentalPrice(rentalModel: any) {
    let days = Math.floor(
      (new Date(rentalModel.value.returnDate).getTime() -
        new Date(rentalModel.value.rentDate).getTime()) / 1000 / 60 / 60 / 24
    );
    this.totalRentalPrice = this.rentalPrice * days;
  }

  getTotalRentalPrice() {
    return this.totalRentalPrice;
  }
}
