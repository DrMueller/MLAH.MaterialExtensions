export class ColumnDefinition<T> {
  constructor(
    public readonly propertyName: keyof T,
    public readonly headerDescription: string
  ) { }
}
