import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invalidDetailsDialog',
  templateUrl: './invalidDetailsDialog.component.html',
  //styleUrls: ['./email-exists-dialog.component.css']
})
export class InvalidDetailsDialogComponent {
  constructor(public dialogRef: MatDialogRef<InvalidDetailsDialogComponent>) { }
}

