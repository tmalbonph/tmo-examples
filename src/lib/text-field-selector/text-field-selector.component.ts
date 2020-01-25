import { Component } from '@angular/core';

@Component({
  selector: 'tmo-examples-text-field-selector',
  templateUrl: './text-field-selector.component.html',
  styleUrls: ['./text-field-selector.component.scss']
})
export class TextFieldSelectorComponent {
  order: any;
  orders = [{ id: 1, name: 'first' }, { id: 2, name: 'second' }, { id: 3, name: 'third' }];
}
