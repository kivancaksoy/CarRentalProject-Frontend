import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetailDto[] = [];
  currentCar: CarDetailDto;
  defaultCar: CarDetailDto;
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColorId(params['colorId']);
      } else if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;

      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;

      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService
      .getCarDetailsByColorId(colorId)
      .subscribe((response) => (this.carDetails = response.data));
    this.dataLoaded = true;
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: CarDetailDto) {
    this.currentCar = car;
  }

  resetCurrentCar() {
    this.currentCar = this.defaultCar;
  }
}
