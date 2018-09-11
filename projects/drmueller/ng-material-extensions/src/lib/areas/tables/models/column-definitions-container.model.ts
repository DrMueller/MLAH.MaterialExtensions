import { ColumnDefinition } from '.';

export class ColumnDefinitionsContainer<T> {
  public constructor(public readonly definitions: ColumnDefinition<T>[]) {
  }

  public get columnNames(): string[] {
    return this.definitions.map(def => def.name);
  }

  public getPropertyName(name: string): keyof T {
    return this.definitions.find(def => def.name === name).propertyName;
  }
}
