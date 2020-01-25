import { Component, OnInit } from '@angular/core';
import { BRAND_COLOR_SETS } from './color-sets';

@Component({
  selector: 'tmo-examples-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent  {
  readonly colorSets = BRAND_COLOR_SETS;
}
