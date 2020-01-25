import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ExampleModalComponent } from './example-modal.component';

@Component({
  selector: 'tmo-examples-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent {
  title = 'My modal';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleModalComponent, {
      autoFocus: false,
      panelClass: 'modal',
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
