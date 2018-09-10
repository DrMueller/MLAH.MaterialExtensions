import { TestBed, inject } from '@angular/core/testing';

import { ColumnDefinitionsBuilderService } from './column-definitions-builder.service';

describe('ColumnDefinitionsBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnDefinitionsBuilderService]
    });
  });

  it('should be created', inject([ColumnDefinitionsBuilderService], (service: ColumnDefinitionsBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
