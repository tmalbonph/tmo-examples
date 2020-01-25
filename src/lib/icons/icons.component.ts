import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tmo-examples-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconsComponent {
  arrowIcons: string[] = [
    'arrow_back',
    'arrow_forward',
    'arrow_upward',
    'arrow_downward',
    'chevron_left',
    'chevron_right',
    'expand_less',
    'expand_more',
    'arrow_left',
    'arrow_right',
    'arrow_drop_up',
    'arrow_drop_down',
    'arrow_back_ios',
    'arrow_forward_ios',
    'swap_horiz'
  ];

  fillIcons: string[] = [
    'check_box_outline_blank',
    'check_box',
    'check',
    'clear',
    'edit',
    'add',
    'remove',
    'highlight_off',
    'radio_button_unchecked',
    'radio_button_checked',
    'search',
    'help',
    'check_circle',
    'visibility',
    'visibility_off',
    'zoom_in',
    'warning',
    'print',
    'error',
    'error_outline',
    'flag',
    'menu',
    'more_vert',
    'zoom_out_map',
    'info_outline'
  ];

  outlineIcons: string[] = [
    'date_range',
    'chat',
    'shopping_cart',
    'add_circle_outline',
    'check_circle',
    'place'
  ];
}
