import { Component } from '@angular/core';

@Component({
  selector: 'tmo-examples-progress-determinate-spinner',
  templateUrl: './progress-determinate-spinner.component.html',
  styleUrls: ['./progress-determinate-spinner.component.scss']
})
export class ProgressDeterminateSpinnerComponent {
  progress = 35;
  timer: any;
  stroke: any;
  size: number;

  constructor() {
    this.size = 88;
    this.stroke = 5;
  }
}
