import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatDialogModule, MatCheckboxModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { ColDefBuilderFactoryService } from './tables/services';
import { MatTableComponent } from './tables/components/mat-table';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: [
    MatTableComponent
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
    MatTableComponent
  ],
})
export class NgMaterialExtensionsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMaterialExtensionsModule,
      providers: [
        ColDefBuilderFactoryService
      ]
    };
  }
}
