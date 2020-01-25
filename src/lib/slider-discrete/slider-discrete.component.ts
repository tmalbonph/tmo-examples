import { Component } from '@angular/core';

@Component({
  selector: 'tmo-examples-slider-discrete',
  templateUrl: './slider-discrete.component.html',
  styleUrls: ['./slider-discrete.component.scss']
})
export class SliderDiscreteComponent {
  max: number;
  min: number;
  step: number;
  thumbLabel: string;
  tickInterval: number;
  constructor() {
    this.max = 85;
    this.min = 10;
    this.step = 5;
    this.thumbLabel = 'step';
    this.tickInterval = 5;
  }
}
