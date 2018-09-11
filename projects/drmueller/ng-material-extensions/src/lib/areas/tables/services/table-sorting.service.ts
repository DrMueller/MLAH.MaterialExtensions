import { Injectable } from '@angular/core';
import { Sort } from '@angular/material';

import { ColumnDefinitionsContainer } from '../';

@Injectable({
  providedIn: 'root'
})
export class TableSortingService<T> {
  public sortEntries(data: T[], sort: Sort, columnDefinitions: ColumnDefinitionsContainer<T>): T[] {
    if (!sort.active || sort.direction === '') {
      return data;
    }

    const propertyName = columnDefinitions.getPropertyName(sort.active);
    const sortAscending = sort.direction === 'asc';

    const result = data.sort((a: T, b: T) => {
      const objectaValue = a[propertyName];
      const objectbValue = b[propertyName];
      return this.compare(objectaValue, objectbValue, sortAscending);
    });

    return result;
  }

  private compare(a: any, b: any, sortAscending: boolean): number {
    return (a < b ? -1 : 1) * (sortAscending ? 1 : -1);
  }
}
