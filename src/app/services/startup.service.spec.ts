import { TestBed } from '@angular/core/testing';

import { StartupsService } from './startup.service';

describe('StartupService', () => {
  let service: StartupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
