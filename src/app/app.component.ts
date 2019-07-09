import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

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
  public columnDefinitions: ColumnDefinitionsContainer;
  public isBusyIndicatorShown = false;
  @ViewChild('compWithButton') public compWithButtonTemplate: TemplateRef<any>;
  @ViewChild('anotherButton') public anotherButtonTemplate: TemplateRef<any>;
  @ViewChild(MatTableComponent) public table: MatTableComponent<Individual>;
  public individuals: Individual[] = [];
  public matDialogResult: any;
  public selectedIndividuals: Individual[] = [];
  public selectedRowSelectionKey: number;

  public constructor(
    private individualRepository: IndividualRepositoryService,
    private individualColDefBuilder: IndividualColDefBuilderService,
    private modalDialogService: ModalDialogService) {
  }

  public anotherButtonClicked(individualId: string): void {
    const indId = parseInt(individualId, 10);
    const individual = this.individuals.find(ind => ind.id === indId);
    alert('Hello from another Component Button: ' + JSON.stringify(individual));
  }

  public componentButtonClicked(individualId: number): void {
    const individual = this.individuals.find(ind => ind.id === individualId);
    alert('Hello from Component Button: ' + JSON.stringify(individual));
  }

  public deletedSelectedIndividuals(): void {
    this.table.deleteEntries(this.selectedIndividuals);
  }

  public get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }

  public get rowSelectionType(): TableRowSelectionType {
    return this.selectedRowSelectionKey;
  }

  public ngOnInit(): void {
    this.selectedRowSelectionKey = 1;
    this.columnDefinitions = this.individualColDefBuilder.buildDefinitions(this.compWithButtonTemplate, this.anotherButtonTemplate);
    this.individuals = this.individualRepository.loadAll();
  }

  public rowSelectionChanged(selectedItems: Individual[]): void {
    console.log(`Selected items: ${selectedItems.length}`);
    this.selectedIndividuals = selectedItems;
  }

  public showDialog(): void {
    this.modalDialogService.showModalDialog(this.selectedIndividuals[0], IndividualDialogComponent).afterClosed().subscribe(rslt => {
      this.matDialogResult = rslt;
    });
  }

  public toggleBusyIndicator(): void {
    this.isBusyIndicatorShown = !this.isBusyIndicatorShown;
  }
}
