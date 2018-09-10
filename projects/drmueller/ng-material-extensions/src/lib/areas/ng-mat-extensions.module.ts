import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import * as table from './tables';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  declarations: [
    table.MatTableComponent
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    table.MatTableComponent
  ]
})
export class NgMatExtensionsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMatExtensionsModule,
      providers: [
        table.ColumnDefinitionsBuilderFactoryService
      ]
    };
  }
}
