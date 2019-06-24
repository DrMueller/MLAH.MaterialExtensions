import { Injectable, TemplateRef } from '@angular/core';
import { ColDefBuilderFactoryService, ColumnDefinitionsContainer } from '../../../projects/drmueller/ng-material-extensions/src/public_api';
import { Individual } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualColDefBuilderService {

  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(compWithButtonTemplate: TemplateRef<any>): ColumnDefinitionsContainer {
    return this.builderFactory
      .startBuilding()
      .withColumn('id', 'ID', 'fixed-width').bindingTo<Individual>('id')
      .withColumn('emailAddress', 'E-Mail Address').bindingTo<Individual>('emailAddress')
      .withColumn('firstName', 'First Name').bindingTo<Individual>('firstName')
      .withColumn('lastName', 'Last Name').bindingTo<Individual>('lastName')
      .withColumn('cmp1', '', 'auto-width').withTemplate(compWithButtonTemplate)
      .build();
  }
}
