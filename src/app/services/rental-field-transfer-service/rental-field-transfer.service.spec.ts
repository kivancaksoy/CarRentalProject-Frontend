import { TestBed } from '@angular/core/testing';

import { RentalFieldTransferService } from './rental-field-transfer.service';

describe('RentalFieldTransferService', () => {
  let service: RentalFieldTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFieldTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
