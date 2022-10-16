import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RentalService } from 'src/app/services/rental-service/rental.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
  }
  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.nullValidator],
    });
  }

  add() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      this.rentalService.add(rentalModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, 'Başarılı.');
        },
        error: (responseError) => {
          console.log(responseError.error.Errors)
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası.'
              );
            }
          }
        },
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat.');
    }
  }
}
