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
import { ButtonTemplateComponent } from './tables/components/button-template/button-template.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
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
    MatTableComponent,
    ButtonTemplateComponent
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
    MatTableComponent,
    ButtonTemplateComponent
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
