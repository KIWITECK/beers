import { TestBed } from '@angular/core/testing';

import { BeersServiceService } from './beers-service.service';

describe('BeersServiceService', () => {
  let service: BeersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
