import { Injectable } from '@angular/core';
import { ColDefBuilderFactoryService, ColumnDefinitionsContainer } from '../../../projects/drmueller/ng-material-extensions/src/public_api';
import { Individual } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualColDefBuilderService {

  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(): ColumnDefinitionsContainer<Individual> {
    return this.builderFactory
    .createBuilder<Individual>()
    .withColumnDefinition('id', 'ID')
    .withColumnDefinition('emailAddress', 'E-Mail Address')
    .withColumnDefinition('firstName', 'First Name')
    .withColumnDefinition('lastName', 'Last Name')
    .build();
  }
}
