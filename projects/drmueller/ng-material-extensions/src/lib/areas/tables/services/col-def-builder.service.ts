import { ColumnDefinition, ColumnDefinitionsContainer } from '../models/index';

export class ColDefBuilderService<T> {
  private _definitions: ColumnDefinition<T>[];

  constructor() {
    this._definitions = [];
  }

  public withColumnDefinition(propertyName: keyof T, headerDescription: string): ColDefBuilderService<T> {
    const colDef = new ColumnDefinition<T>(propertyName, headerDescription);
    this._definitions.push(colDef);
    return this;
  }

  public build(): ColumnDefinitionsContainer<T> {
    return new ColumnDefinitionsContainer(this._definitions);
  }
}
