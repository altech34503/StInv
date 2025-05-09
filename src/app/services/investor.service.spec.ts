import { TestBed } from '@angular/core/testing';

import { InvestorsService } from './investor.service';

describe('InvestorService', () => {
  let service: InvestorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
