import { TestBed } from '@angular/core/testing';

import { RunSearchService } from './run-search.service';

describe('RunSearchService', () => {
  let service: RunSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
