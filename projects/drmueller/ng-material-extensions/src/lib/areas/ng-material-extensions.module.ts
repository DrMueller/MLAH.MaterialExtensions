import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatDialogModule, MatCheckboxModule
} from '@angular/material';

import * as table from './tables/index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
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
    MatDialogModule,
    table.MatTableComponent
  ],
})
export class NgMaterialExtensionsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMaterialExtensionsModule,
      providers: [
        table.ColDefBuilderFactoryService
      ]
    };
  }
}
