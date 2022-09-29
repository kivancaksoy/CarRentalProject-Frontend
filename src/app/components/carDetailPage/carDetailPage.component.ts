import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarImageService } from 'src/app/services/carImageService/carImage.service';
import { CarService } from 'src/app/services/carService/car.service';

@Component({
  selector: 'app-carDetailPage',
  templateUrl: './carDetailPage.component.html',
  styleUrls: ['./carDetailPage.component.css'],
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
