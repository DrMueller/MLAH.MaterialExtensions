import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatDialogModule, MatCheckboxModule, MatProgressSpinnerModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { ColDefBuilderFactoryService } from './tables/services';
import { MatTableComponent } from './tables/components/mat-table';
import { ButtonTemplateComponent } from './tables/components/button-template/button-template.component';
import { BusyIndicatorComponent } from './busy-indication/components/busy-indicator';
import { BusyIndicatorDirective } from './busy-indication/directives';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: [
    BusyIndicatorComponent,
    BusyIndicatorDirective,
    MatTableComponent,
    ButtonTemplateComponent
  ],
  entryComponents: [
    BusyIndicatorComponent
  ],
  exports: [
    BusyIndicatorDirective,
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
