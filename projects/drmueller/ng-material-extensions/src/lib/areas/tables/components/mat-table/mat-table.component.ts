import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTable, Sort } from '@angular/material';

import { ColumnDefinitionsContainer } from '../../models/index';
import { TableSortingService } from '../../services/index';

@Component({
  selector: 'drm-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent<T> {
  @Input() public columnDefinitions: ColumnDefinitionsContainer<T>;
  @Output() public selectionChanged = new EventEmitter<T[]>();
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatTable) public matTable: MatTable<T>;

  private _data: T[];
  private selection = new SelectionModel<T>(true);

  public constructor(private sortingService: TableSortingService<T>) {
  }

  @Input() public set data(values: T[]) {
    this._data = values;
    if (this.matTable) {
      this.matTable.renderRows();
    }
  }

  public deleteEntris(entries: T[]): void {
    entries.forEach(entry => {
      const dtoIndex = this.data.indexOf(entry);
      this.data.splice(dtoIndex, 1);
    });

    this.selection.clear();
    this.selectionChanged.emit(this.selection.selected);
    this.renderRows();
  }

  public get data(): T[] {
    return this._data;
  }

  public get entriesCount(): number {
    if (!this.data) {
      return 0;
    }

    return this.data.length;
  }

  public isRowSelected(row: T): boolean {
    return this.selection.isSelected(row);
  }

  public sortingChanged(sort: Sort): void {
    this.data = this.sortingService.sortEntries(this.data, sort, this.columnDefinitions);
    this.renderRows();
  }

  public toggleRowSelection(row: T): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection.selected);
  }

  private renderRows(): void {
    this.matTable.renderRows();
  }
}
