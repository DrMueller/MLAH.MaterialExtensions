import { TestBed, inject } from '@angular/core/testing';

import { TableSortingService } from './table-sorting.service';

describe('TableSortingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableSortingService]
    });
  });

  it('should be created', inject([TableSortingService], (service: TableSortingService) => {
    expect(service).toBeTruthy();
  }));
});
