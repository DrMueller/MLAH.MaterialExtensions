import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Individual } from '../models';

@Component({
  selector: 'app-individual-dialog',
  templateUrl: './individual-dialog.component.html',
  styleUrls: ['./individual-dialog.component.css']
})
export class IndividualDialogComponent {
  public constructor(
    public dialogRef: MatDialogRef<IndividualDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public individual: Individual) { }
}
