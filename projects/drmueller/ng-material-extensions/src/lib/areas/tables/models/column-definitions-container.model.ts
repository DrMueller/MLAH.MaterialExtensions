import { ColumnDefinition } from '.';

export class ColumnDefinitionsContainer<T> {
  public constructor(public readonly definitions: ColumnDefinition<T>[]) {
  }

  public get columnNames(): (keyof T)[] {
    return this.definitions.map(def => def.propertyName);
  }
}
