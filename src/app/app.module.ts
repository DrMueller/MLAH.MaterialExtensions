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

@NgModule({
  declarations: [
    AppComponent,
    IndividualDialogComponent
  ],
  entryComponents: [
    IndividualDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgMaterialExtensionsModule
  ],
  providers: [
    services.IndividualColDefBuilderService,
    services.IndividualRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
