import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment-service/payment.service';
import { RentalFieldTransferService } from 'src/app/services/rental-field-transfer-service/rental-field-transfer.service';
import { RentalService } from 'src/app/services/rental-service/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentAddForm: FormGroup;
  totalRentalPrice: number;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private rentalFieldTransferService: RentalFieldTransferService
  ) {}

  ngOnInit(): void {
    this.createPaymentAddForm();
    this.getRentalPrice();
  }

  createPaymentAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
    });
  }

  checkPaymentDetails() {
    console.log(Number(this.rentalFieldTransferService.getTotalRentalPrice()));
    if (this.paymentAddForm.valid) {
      
      let cardModel = Object.assign({}, this.paymentAddForm.value);
      this.paymentService.checkPaymentDetails(cardModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, 'Başarılı.');
          this.add();
        },
        error: (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası, Kredi KArtı'
              );
            }
          }
        },
      });
    } else {
      this.toastrService.error('Lütfen tüm alanları doldurunuz.', 'Dikkat!');
    }
  }


  //rental-service add()
  add() {
    console.log(this.rentalFieldTransferService.getRentalModel());
    this.rentalService.add(this.rentalFieldTransferService.getRentalModel()).subscribe({      
      next: (response) => {
        this.toastrService.success(response.message, 'Başarılı.');
      },
      error: (responseError) => {
        console.log(responseError.error.Errors)
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'Doğrulama Hatası. Kiralama.'
            );
          }
        }
      },
    });
  }

  getRentalPrice(){
    this.totalRentalPrice = this.rentalFieldTransferService.getTotalRentalPrice();
    return this.totalRentalPrice;
  }

}
