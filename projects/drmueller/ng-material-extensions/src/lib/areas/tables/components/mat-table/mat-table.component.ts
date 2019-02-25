import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';

import { ColumnDefinitionsContainer, TableRowSelectionType } from '../../models/index';

@Component({
  selector: 'drm-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent<T> implements OnInit, AfterViewInit {

  @Input() public columnDefinitions: ColumnDefinitionsContainer<T>;

  @Input() public set data(values: T[]) {
    this._data = values;
    if (this.matTable) {
      this.bindData();
    }
  }

  @Input() public set rowSelectionType(value: TableRowSelectionType) {
    this._rowSelectionType = value;
    this.initializeDataSource();
  }

  @Output() public selectionChanged = new EventEmitter<T[]>();

  public searchText: string;
  public dataSource: MatTableDataSource<T>;

  public selection: SelectionModel<T>;
  @ViewChild(MatPaginator) public matPaginator: MatPaginator;
  @ViewChild(MatSort) public matSort: MatSort;
  @ViewChild(MatTable) public matTable: MatTable<T>;

  private _rowSelectionType: TableRowSelectionType;
  private _data: T[];

  public deleteEntries(entries: T[]): void {
    entries.forEach(entry => {
      const dtoIndex = this._data.indexOf(entry);
      this._data.splice(dtoIndex, 1);
    });

    this.selection.deselect(...entries);
    this.bindData();
    this.selectionChanged.emit(this.selection.selected);
    this.matTable.renderRows();
  }

  public get columnNames(): string[] {
    const result: string[] = [];

    if (this._rowSelectionType !== TableRowSelectionType.ReadOnly) {
      result.push('Select');
    }

    result.push(...this.columnDefinitions.columnNames.map(f => f.toString()));
    return result;
  }

  public get isSelectionAllowed(): boolean {
    return this._rowSelectionType !== TableRowSelectionType.ReadOnly;
  }

  public isRowSelected(row: T): boolean {
    return this.selection.isSelected(row);
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

  public ngOnInit(): void {
    this.initializeDataSource();
  }

  public toggleRowSelection(row: T): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection.selected);
  }

  public searchTextChanged(newSearchText: string): void {
    this.dataSource.filter = newSearchText.toLocaleLowerCase();
  }

  private bindData(): void {
    this.dataSource = new MatTableDataSource<T>(this._data);
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

  private initializeDataSource(): void {
    this.selection = new SelectionModel<T>(this._rowSelectionType === TableRowSelectionType.Multi, []);
    this.dataSource = new MatTableDataSource<T>(this._data);
  }
}
