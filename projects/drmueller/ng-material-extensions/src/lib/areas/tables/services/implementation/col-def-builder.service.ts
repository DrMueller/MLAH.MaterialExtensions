import { Injectable } from '@angular/core';

import { IColDefBuilderOrchestratorService, IColDefBuilderService } from '..';
import { BindingColumnDefinition } from '../../models/col-defs/binding-column-definition.model';
import { ColumnDefinitionBase } from '../../models/col-defs/column-definition-base.model';
import { TemplateColumnDefinition } from '../../models/col-defs/template-column-definition.model';

@Injectable({
  providedIn: 'root'
})

export class ColDefBuilderService implements IColDefBuilderService {
  private _propertyName: any | undefined = undefined;
  private _templateRef: any | undefined = undefined;

  public constructor(
    private orchestrator: IColDefBuilderOrchestratorService,
    private columnKey: string,
    private headerDescription: string) {
  }

  public bindingTo<T>(propertyName: keyof T): IColDefBuilderOrchestratorService {
    this._propertyName = propertyName;
    return this.orchestrator;
  }

  public withTemplate(componentType: any): IColDefBuilderOrchestratorService {
    this._templateRef = componentType;
    return this.orchestrator;
  }

  public build(): ColumnDefinitionBase {
    if (this._propertyName) {
      return new BindingColumnDefinition(this.columnKey, this.headerDescription, this._propertyName);
    }

    if (this._templateRef) {
      return new TemplateColumnDefinition(this.columnKey, this.headerDescription, this._templateRef);
    }

    throw Error('Well, that went south quickly.');
  }
}
