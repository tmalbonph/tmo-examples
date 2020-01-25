import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// comp for the dialog content
@Component({
  selector: 'tmo-examples-dialog-content',
  templateUrl: './dialog-overview-example.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogContentComponent { }

@Component({
  selector: 'tmo-examples-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      height: '400px',
      width: '275px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
