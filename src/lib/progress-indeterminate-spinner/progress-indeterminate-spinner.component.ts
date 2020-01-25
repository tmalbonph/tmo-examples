import { Component } from '@angular/core';

@Component({
  selector: 'tmo-examples-progress-indeterminate-spinner',
  templateUrl: './progress-indeterminate-spinner.component.html',
  styleUrls: ['./progress-indeterminate-spinner.component.scss']
})
export class ProgressIndeterminateSpinnerComponent {
  stroke: any;
  size: number;

  constructor() {
    this.size = 88;
    this.stroke = 5;
  }
}
