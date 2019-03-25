import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.css']
})
export class TableButtonComponent {

  @Output() public buttonClick: EventEmitter<string> = new EventEmitter<string>();

  public shootEvent(event: MouseEvent): void {
    let target = <any>event.target;
    if (target) {

      while (target.localName !== 'td') {
        target = target.parentNode;
      }

      const individualId = target.getAttribute('data-row-id');
      this.buttonClick.next(individualId);
    }
  }
}
