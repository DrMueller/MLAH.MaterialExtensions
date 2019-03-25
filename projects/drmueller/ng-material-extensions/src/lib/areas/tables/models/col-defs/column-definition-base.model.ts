export abstract class ColumnDefinitionBase {
  constructor(
    public readonly columnKey: string,
    public readonly headerDescription: string
  ) { }
}
