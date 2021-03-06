import { Injectable, TemplateRef } from '@angular/core';
import { ColDefBuilderFactoryService, ColumnDefinitionsContainer } from '../../../projects/drmueller/ng-material-extensions/src/public_api';
import { Individual } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualColDefBuilderService {
  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(
    compWithButtonTemplate: TemplateRef<any>,
    anotherButtonTemplate: TemplateRef<any>): ColumnDefinitionsContainer {
    return this.builderFactory
      .startBuilding<Individual>()
      .withColumn('id', 'ID', 'fixed-width').bindingTo('id')
      .withColumn('emailAddress', 'E-Mail Address').bindingTo('emailAddress')
      .withColumn('firstName', 'First Name').bindingTo('firstName')
      .withColumn('lastName', 'Last Name').bindingTo('lastName')
      .withColumn('cmp1', '', 'auto-width').withTemplate(compWithButtonTemplate)
      .withColumn('cmp2', '', 'auto-width').withTemplate(anotherButtonTemplate)
      .build();
  }
}
