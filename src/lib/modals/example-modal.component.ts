import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'tmo-examples-modal',
  templateUrl: './example-modal.component.html'
})
export class ExampleModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ExampleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
