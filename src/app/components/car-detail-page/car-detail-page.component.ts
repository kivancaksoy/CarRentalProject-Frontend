import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarImage } from 'src/app/models/car-image/carImage';
import { CarImageService } from 'src/app/services/car-image-service/car-image.service';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent implements OnInit {
  carImages: CarImage[] = [];
  carDetails: CarDetailDto[] = [];
  dataLoaded = false;
  constructor(
    private carImageService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
