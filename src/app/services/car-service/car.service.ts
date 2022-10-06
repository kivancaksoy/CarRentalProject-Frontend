import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44324/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiUrl + 'cars/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByColorId(
    colorId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiUrl + 'cars/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByCarId(
    carId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByBrandIdandColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiUrl +
      'cars/getcardetailsbybrandidandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
      return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
