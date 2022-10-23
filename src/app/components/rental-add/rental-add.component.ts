import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RentalService } from 'src/app/services/rental-service/rental.service';
import { ToastrService } from 'ngx-toastr';
import { RentalFieldTransferService } from 'src/app/services/rental-field-transfer-service/rental-field-transfer.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  routePayment: string;
  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private rentalFieldTransferService: RentalFieldTransferService
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
  }
  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: [this.rentalFieldTransferService.getCarId(), Validators.required],
      customerId: [
        this.rentalFieldTransferService.getCustomerId(),
        Validators.required,
      ],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.nullValidator],
    });
  }

  add() {
    if (this.rentalAddForm.valid) {
      this.routePayment = '/payment';
      this.rentalFieldTransferService.setRentalModel(this.rentalAddForm);
      this.rentalFieldTransferService.setTotalRentalPrice(this.rentalAddForm);
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat.');
    }
  }

  getRoutePayment() {
    return this.routePayment;
  }
}
