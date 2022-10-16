import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { RentalDetailDto } from 'src/app/models/rental/rentalDetailDto';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44324/api/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  add(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath, rental)
  }
}
