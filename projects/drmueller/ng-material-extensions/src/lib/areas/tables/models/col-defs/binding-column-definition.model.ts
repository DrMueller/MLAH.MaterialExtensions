import { ColumnDefinitionBase } from './column-definition-base.model';

export class BindingColumnDefinition extends ColumnDefinitionBase {
  public constructor(
    columnKey: string,
    headerDescription: string,
    public propertyKey: string
  ) {
    super(columnKey, headerDescription);
  }
}
