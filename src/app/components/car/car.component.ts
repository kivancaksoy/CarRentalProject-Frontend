import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { CarService } from 'src/app/services/car-service/car.service';
import { ColorService } from 'src/app/services/color-service/color.service';

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
  filterText = '';

  colorId: number = 0;
  colors: Color[] = [];
  brandId: number = 0;
  brands: Brand[] = [];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
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
      this.getColors();
      this.getBrands();
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

  //homepage'e taşınabilir.
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarDetailsByBrandIdandColorId(brandId: number, colorId: number) {
    this.carService
      .getCarDetailsByBrandIdandColorId(brandId, colorId)
      .subscribe((response) => (this.carDetails = response.data));
  }
}
