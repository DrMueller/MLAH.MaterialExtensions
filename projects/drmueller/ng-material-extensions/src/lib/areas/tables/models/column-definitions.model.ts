import { ColumnDefinition } from '.';

export class ColumnDefinitions {
  public constructor(public readonly definitions: ColumnDefinition[]) {
  }

  public get columnNames(): string[] {
    return this.definitions.map(def => def.name);
  }

  public getPropertyNameForName(name: string): string {
    return this.definitions.find(def => def.name === name).propertyName;
  }
}
