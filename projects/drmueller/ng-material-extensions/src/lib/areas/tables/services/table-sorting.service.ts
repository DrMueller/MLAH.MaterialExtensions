import { Injectable } from '@angular/core';
import { Sort } from '@angular/material';
import { ColumnDefinitions } from '..';

@Injectable({
  providedIn: 'root'
})
export class TableSortingService {
  public sortEntries(data: any[], sort: Sort, columnDefinitions: ColumnDefinitions): any[] {
    if (!sort.active || sort.direction === '') {
      return data;
    }

    const propertyName = columnDefinitions.getPropertyNameForName(sort.active);
    const sortAscending = sort.direction === 'asc';

    const result = data.sort((a: any, b: any) => {
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
