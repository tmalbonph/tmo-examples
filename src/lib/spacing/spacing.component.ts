import { Component } from '@angular/core';

@Component({
  selector: 'tmo-examples-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent {
  spacingProperties = ['margin', 'padding'];
  sizes = ['3xs', 'xxs', 'xs', 'sm', 'med', 'lg', 'xl', 'xxl'];
  directionPrefixes = [
    '',
    '-left',
    '-right',
    '-top',
    '-bottom',
    '-horizontal',
    '-vertical'
  ];
}
