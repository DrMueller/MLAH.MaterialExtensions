import { TableTemplateBaseComponent } from 'projects/drmueller/ng-material-extensions/src/public_api';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.css']
})
export class TableButtonComponent extends TableTemplateBaseComponent {

  @Output() public buttonClick: EventEmitter<number> = new EventEmitter<number>();

  public shootEvent(event: MouseEvent): void {
    const individualId = super.tryFetchingRowId(event);
    if (individualId) {
      const indNum = parseInt(individualId, 10);
      this.buttonClick.next(indNum);
    }
  }
}
