import { TestBed, inject } from '@angular/core/testing';

import { ColumnDefinitionsBuilderFactoryService } from './column-definitions-builder-factory.service';

describe('ColumnDefinitionsBuilderFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnDefinitionsBuilderFactoryService]
    });
  });

  it('should be created', inject([ColumnDefinitionsBuilderFactoryService], (service: ColumnDefinitionsBuilderFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
