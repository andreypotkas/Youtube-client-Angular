import { TestBed } from '@angular/core/testing';

import { OpenDetailedInfoService } from './open-detailed-info.service';

describe('OpenDetailedInfoService', () => {
  let service: OpenDetailedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDetailedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
