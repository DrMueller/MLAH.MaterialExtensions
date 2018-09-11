export class ColumnDefinition<T> {
  constructor(
    public readonly name: string,
    public readonly headerDescription: string,
    public readonly propertyName: keyof T
  ) { }
}
