import { BindingColumnDefinition, ColumnDefinitionBase } from '../../../models/col-defs/';

import { IColDefValueBuilderService } from '.';

export class BindingColDefValueBuilderService implements IColDefValueBuilderService {
  public constructor(
    private columnKey: string,
    private headerDescription: string,
    private propertyName: any) {
  }

  public build(): ColumnDefinitionBase {
    return new BindingColumnDefinition(this.columnKey, this.headerDescription, this.propertyName);
  }
}
