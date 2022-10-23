import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card/card';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = "https://localhost:44324/api/";

  constructor(private httpClient: HttpClient) { }

  checkPaymentDetails(card: Card): Observable<ResponseModel>{
    let newPath = this.apiUrl + "cards/checkCard";
    return this.httpClient.post<ResponseModel>(newPath, card);

  }
}
