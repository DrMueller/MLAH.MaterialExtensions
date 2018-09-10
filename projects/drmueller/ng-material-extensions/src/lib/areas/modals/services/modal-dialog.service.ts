import { Injectable, NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  constructor(
    private dialog: MatDialog,
    private ngZone: NgZone
  ) { }

  public showModalDialog<T>(modalData: any, component: ComponentType<T>): void {
    const config = new MatDialogConfig();
    config.data = modalData;
    config.disableClose = true;

    this.ngZone.run(() => {
      this.dialog.open(component, config);
    });
  }
}
