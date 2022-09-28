import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';
import { RentalDetailResponseModel } from 'src/app/models/rental/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44324/api/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    let newPath = this.apiUrl + "rentals/getall"
    return this.httpClient.get<RentalResponseModel>(newPath);
  }

  getRentalDetails(): Observable<RentalDetailResponseModel> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<RentalDetailResponseModel>(newPath);
  }
}
