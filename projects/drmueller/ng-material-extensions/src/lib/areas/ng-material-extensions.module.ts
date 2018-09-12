import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    table.MatTableComponent
  ]
})

export class NgMaterialExtensionsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMaterialExtensionsModule,
      providers: [
        table.ColDefBuilderFactoryService
      ],
    };
  }
}
