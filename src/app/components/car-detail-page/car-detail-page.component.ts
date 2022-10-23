import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarImage } from 'src/app/models/car-image/carImage';
import { CarImageService } from 'src/app/services/car-image-service/car-image.service';
import { CarService } from 'src/app/services/car-service/car.service';
import { RentalFieldTransferService } from 'src/app/services/rental-field-transfer-service/rental-field-transfer.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent implements OnInit {
  carImages: CarImage[] = [];
  carDetails: CarDetailDto[] = [];
  carDetail: CarDetailDto;
  dataLoaded = false;
  constructor(
    private carImageService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentalFieldTransferService: RentalFieldTransferService
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
      this.carDetail = response.data;
      this.dataLoaded = true;
      this.rentalFieldTransferService.setCarId(carId)
      this.rentalFieldTransferService.setRentalPrice(this.carDetail.dailyPrice);
    });
  }
}
