import { Injectable } from '@angular/core';

import { ColumnDefinitionsBuilderService } from './column-definitions-builder.service';

@Injectable({
  providedIn: 'root'
})
export class ColumnDefinitionsBuilderFactoryService {
  public createBuilder(): ColumnDefinitionsBuilderService {
    return new ColumnDefinitionsBuilderService();
  }
}

