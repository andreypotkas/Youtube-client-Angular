import { TestBed } from '@angular/core/testing';

import { ToggleSortBarService } from './toggle-sort-bar.service';

describe('ToggleSortBarService', () => {
  let service: ToggleSortBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSortBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
