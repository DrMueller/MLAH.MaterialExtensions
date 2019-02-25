import { Component, OnInit, ViewChild } from '@angular/core';

import { IKeyValuePair } from '@drmueller/language-extensions';

import { IndividualColDefBuilderService, IndividualRepositoryService } from './services';
import {
    ColumnDefinitionsContainer, MatTableComponent, ModalDialogService, TableRowSelectionType
} from '../../projects/drmueller/ng-material-extensions/src/public_api';
import { Individual } from './models';
import { IndividualDialogComponent } from './individual-dialog/individual-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(MatTableComponent) public table: MatTableComponent<Individual>;
  public columnDefinitions: ColumnDefinitionsContainer<Individual>;
  public individuals: Individual[] = [];
  public selectedIndividuals: Individual[] = [];
  public matDialogResult: any;

  public selectedRowSelectionKey: number;

  public get rowSelectionType(): TableRowSelectionType {
    return this.selectedRowSelectionKey;
  }

  public constructor(
    private individualRepository: IndividualRepositoryService,
    private individualColDefBuilder: IndividualColDefBuilderService,
    private modalDialogService: ModalDialogService) {
  }

  public showDialog(): void {
    this.modalDialogService.showModalDialog(this.selectedIndividuals[0], IndividualDialogComponent).afterClosed().subscribe(rslt => {
      this.matDialogResult = rslt;
    });
  }

  public deletedSelectedIndividuals(): void {
    this.table.deleteEntries(this.selectedIndividuals);
  }

  public get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }

  public ngOnInit(): void {
    this.columnDefinitions = this.individualColDefBuilder.buildDefinitions();
    this.individuals = this.individualRepository.loadAll();
  }

  public rowSelectionChanged(selectedItems: Individual[]): void {
    this.selectedIndividuals = selectedItems;
  }
}
