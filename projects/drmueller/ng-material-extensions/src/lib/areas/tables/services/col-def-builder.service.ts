import { Injectable } from '@angular/core';

import { ColumnDefinition, ColumnDefinitionsContainer } from '../models/index';

@Injectable({
  providedIn: 'root'
})

export class ColDefBuilderService<T> {
  private _definitions: ColumnDefinition<T>[];

  constructor() {
    this._definitions = [];
  }

  public withColumnDefinition(name: string, headerDescription: string, propertyName: keyof T): ColDefBuilderService<T> {
    const colDef = new ColumnDefinition<T>(name, headerDescription, propertyName);
    this._definitions.push(colDef);
    return this;
  }

  public build(): ColumnDefinitionsContainer<T> {
    return new ColumnDefinitionsContainer(this._definitions);
  }
}
