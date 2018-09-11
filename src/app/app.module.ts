import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as services from './services';
import {
  NgMaterialExtensionsModule
} from '../../projects/drmueller/ng-material-extensions/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialExtensionsModule
  ],
  providers: [
    services.IndividualColDefBuilderService,
    services.IndividualRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
