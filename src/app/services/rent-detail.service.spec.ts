import { TestBed } from '@angular/core/testing';

import { RentDetailService } from './rent-detail.service';

describe('RentDetailService', () => {
  let service: RentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
