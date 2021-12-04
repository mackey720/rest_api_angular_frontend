import { TestBed } from '@angular/core/testing';

import { CruiseDataService } from './cruise-data.service';

describe('CruiseDataService', () => {
  let service: CruiseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruiseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
