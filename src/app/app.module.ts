import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as services from './services';
import {
  NgMaterialExtensionsModule
} from '../../projects/drmueller/ng-material-extensions/src/public_api';
import { AppComponent } from './app.component';
import { IndividualDialogComponent } from './individual-dialog/individual-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { TableButtonComponent } from './table-button/table-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualDialogComponent,
    TableButtonComponent
  ],
  entryComponents: [
    IndividualDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgMaterialExtensionsModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [
    services.IndividualColDefBuilderService,
    services.IndividualRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
