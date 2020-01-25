import {
  ButtonsPrimaryComponent,
  ButtonsSecondaryComponent,
  ButtonsTertiaryComponent,
  ButtonsHyperlinksComponent,
  AlertCriticalComponent,
  AlertWarningComponent,
  DatepickerOverviewComponent,
  DividerExampleComponent,
  PriceLockupOriginalComponent,
  PriceLockupTotalComponent,
  PriceLockupPaymentComponent,
  PriceLockupZeroComponent,
  PriceLockupStandaloneComponent,
  PriceLockupDiscountComponent,
  ProgressDeterminateSpinnerComponent,
  ProgressIndeterminateSpinnerComponent,
  ProgressDeterminateBarComponent,
  ProgressIndeterminateBarComponent,
  SliderDiscreteComponent,
  SliderContinuousComponent,
  SpacersHorizontalComponent,
  SpacersVerticalComponent,
  TextFieldTooltipComponent,
  TextFieldHintComponent,
  TextFieldSuffixComponent,
  TextFieldMaxRowsComponent,
  TextFieldSelectorComponent,
  TooltipOverviewComponent,
  TypographyDisplayComponent,
  TypographyHeadingComponent,
  TypographyBodyComponent,
  TypographyLegalComponent,
  AccordionOverviewComponent,
  ChipsHorizontalComponent,
  ChipsVerticalComponent,
  DialogOverviewComponent,
  DialogContentComponent,
  InputTooltipComponent,
  InputHintComponent,
  InputSuffixComponent,
  InputTextareaComponent,
  InputSelectComponent,
  ListSingleLineComponent,
  ListDoubleLineComponent,
  ListTripleLineComponent,
  PaginatorConfigurableComponent,
  ControlToggleComponent,
  ControlRadioComponent,
  ControlCheckboxComponent,
  TabGroupBasicComponent,
  ColorsComponent,
  SpacingComponent,
  TypographyComponent,
  ModalsComponent,
  TabsComponent,
  ButtonsComponent,
  DividersComponent,
  LoadingComponent,
  BannersComponent,
  IconsComponent,
  FormsComponent
} from '../lib/tmo-examples.module';

export interface LiveExample {
  title: string;
  component: any;
  assetsFiles?: string[];
  additionalFiles?: string[];
  selectorName?: string;
  componentNames?: string[];
}

const EXAMPLE_COMPONENTS: { [key: string]: LiveExample } = {
  'buttons-primary': {
    title: 'Primary',
    component: ButtonsPrimaryComponent,
    componentNames: ['ButtonsPrimaryComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'buttons-secondary': {
    title: 'Secondary',
    component: ButtonsSecondaryComponent,
    componentNames: ['ButtonsSecondaryComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'buttons-tertiary': {
    title: 'Tertiary',
    component: ButtonsTertiaryComponent,
    componentNames: ['ButtonsTertiaryComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'buttons-hyperlinks': {
    title: 'Hyperlinks',
    component: ButtonsHyperlinksComponent,
    componentNames: ['ButtonsHyperlinksComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'alert-critical': {
    title: 'Critical',
    component: AlertCriticalComponent,
    componentNames: ['AlertCriticalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'alert-warning': {
    title: 'Warning',
    component: AlertWarningComponent,
    componentNames: ['AlertWarningComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'datepicker-overview': {
    title: 'Datepicker',
    component: DatepickerOverviewComponent,
    componentNames: ['DatepickerOverviewComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'divider-example': {
    title: 'Types',
    component: DividerExampleComponent,
    componentNames: ['DividerExampleComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-original': {
    title: 'Original Pricing',
    component: PriceLockupOriginalComponent,
    componentNames: ['PriceLockupOriginalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-total': {
    title: 'Total Price Only',
    component: PriceLockupTotalComponent,
    componentNames: ['PriceLockupTotalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-payment': {
    title: 'Payment Only',
    component: PriceLockupPaymentComponent,
    componentNames: ['PriceLockupPaymentComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-zero': {
    title: 'Zero Pricing',
    component: PriceLockupZeroComponent,
    componentNames: ['PriceLockupZeroComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-standalone': {
    title: 'Stand Alone Pricing',
    component: PriceLockupStandaloneComponent,
    componentNames: ['PriceLockupStandaloneComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'price-lockup-discount': {
    title: 'Discount Pricing',
    component: PriceLockupDiscountComponent,
    componentNames: ['PriceLockupDiscountComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'progress-determinate-spinner': {
    title: 'Determinate Spinner',
    component: ProgressDeterminateSpinnerComponent,
    componentNames: ['ProgressDeterminateSpinnerComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'progress-indeterminate-spinner': {
    title: 'Indeterminate Spinner',
    component: ProgressIndeterminateSpinnerComponent,
    componentNames: ['ProgressIndeterminateSpinnerComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'progress-determinate-bar': {
    title: 'Determinate Bar',
    component: ProgressDeterminateBarComponent,
    componentNames: ['ProgressDeterminateBarComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'progress-indeterminate-bar': {
    title: 'Indeterminate Bar',
    component: ProgressIndeterminateBarComponent,
    componentNames: ['ProgressIndeterminateBarComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'slider-discrete': {
    title: 'Discrete',
    component: SliderDiscreteComponent,
    componentNames: ['SliderDiscreteComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'slider-continuous': {
    title: 'Continuous',
    component: SliderContinuousComponent,
    componentNames: ['SliderContinuousComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'spacers-horizontal': {
    title: 'Horizontal',
    component: SpacersHorizontalComponent,
    componentNames: ['SpacersHorizontalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'spacers-vertical': {
    title: 'Vertical',
    component: SpacersVerticalComponent,
    componentNames: ['SpacersVerticalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'text-field-tooltip': {
    title: 'Optional input with tooltip',
    component: TextFieldTooltipComponent,
    componentNames: ['TextFieldTooltipComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'text-field-hint': {
    title: 'Required input with hint',
    component: TextFieldHintComponent,
    componentNames: ['TextFieldHintComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'text-field-suffix': {
    title: 'Input with prefix and suffix',
    component: TextFieldSuffixComponent,
    componentNames: ['TextFieldSuffixComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'text-field-max-rows': {
    title: 'Text area with max rows',
    component: TextFieldMaxRowsComponent,
    componentNames: ['TextFieldMaxRowsComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'text-field-selector': {
    title: 'Selector',
    component: TextFieldSelectorComponent,
    componentNames: ['TextFieldSelectorComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'tooltip-overview': {
    title: 'Tooltip Overview',
    component: TooltipOverviewComponent,
    componentNames: ['TooltipOverviewComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'typography-display': {
    title: 'Display',
    component: TypographyDisplayComponent,
    componentNames: ['TypographyDisplayComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'typography-heading': {
    title: 'Heading',
    component: TypographyHeadingComponent,
    componentNames: ['TypographyHeadingComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'typography-body': {
    title: 'Body',
    component: TypographyBodyComponent,
    componentNames: ['TypographyBodyComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'typography-legal': {
    title: 'Legal',
    component: TypographyLegalComponent,
    componentNames: ['TypographyLegalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'accordion-overview': {
    title: 'Accordion Overview',
    component: AccordionOverviewComponent,
    componentNames: ['AccordionOverviewComponent'],
    assetsFiles: ['img/homepage/tlogo.svg'],
    selectorName: ''
  },
  'chips-horizontal': {
    title: 'Chips Horizontal',
    component: ChipsHorizontalComponent,
    componentNames: ['ChipsHorizontalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'chips-vertical': {
    title: 'Chips Vertical',
    component: ChipsVerticalComponent,
    componentNames: ['ChipsVerticalComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'dialog-overview': {
    title: 'Dialog Overview',
    component: DialogOverviewComponent,
    componentNames: ['DialogOverviewComponent', 'DialogContentComponent'],
    assetsFiles: [],
    additionalFiles: ['dialog-overview-example.html'],
    selectorName: ''
  },
  'dialog-content': {
    title: 'Dialog Content',
    component: DialogContentComponent,
    componentNames: ['DialogContentComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'input-tooltip': {
    title: 'Optional input with tooltip',
    component: InputTooltipComponent,
    componentNames: ['InputTooltipComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'input-hint': {
    title: 'Required input with hint',
    component: InputHintComponent,
    componentNames: ['InputHintComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'input-suffix': {
    title: 'Input with prefix and suffix',
    component: InputSuffixComponent,
    componentNames: ['InputSuffixComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'input-textarea': {
    title: 'Text area with max rows',
    component: InputTextareaComponent,
    componentNames: ['InputTextareaComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'input-select': {
    title: 'Selector',
    component: InputSelectComponent,
    componentNames: ['InputSelectComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'list-single-line': {
    title: 'Single Line',
    component: ListSingleLineComponent,
    componentNames: ['ListSingleLineComponent'],
    assetsFiles: ['img/homepage/tlogo.svg'],
    selectorName: ''
  },
  'list-double-line': {
    title: 'Double Line',
    component: ListDoubleLineComponent,
    componentNames: ['ListDoubleLineComponent'],
    assetsFiles: ['img/homepage/tlogo.svg'],
    selectorName: ''
  },
  'list-triple-line': {
    title: 'Triple Line',
    component: ListTripleLineComponent,
    componentNames: ['ListTripleLineComponent'],
    assetsFiles: ['img/homepage/tlogo.svg'],
    selectorName: ''
  },
  'paginator-configurable': {
    title: 'Paginator Configurable',
    component: PaginatorConfigurableComponent,
    componentNames: ['PaginatorConfigurableComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'control-toggle': {
    title: 'Toggle',
    component: ControlToggleComponent,
    componentNames: ['ControlToggleComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'control-radio': {
    title: 'Radio',
    component: ControlRadioComponent,
    componentNames: ['ControlRadioComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'control-checkbox': {
    title: 'Checkbox',
    component: ControlCheckboxComponent,
    componentNames: ['ControlCheckboxComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  'tab-group-basic': {
    title: 'Tab Group Basic',
    component: TabGroupBasicComponent,
    componentNames: ['TabGroupBasicComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  colors: {
    title: 'Colors',
    component: ColorsComponent,
    componentNames: ['ColorsComponent'],
    additionalFiles: ['color-sets.ts'],
    assetsFiles: [],
    selectorName: ''
  },
  spacing: {
    title: 'Spacing',
    component: SpacingComponent,
    componentNames: ['SpacingComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  typography: {
    title: 'Typography',
    component: TypographyComponent,
    componentNames: ['TypographyComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  modals: {
    title: 'Modals',
    component: ModalsComponent,
    componentNames: ['ModalsComponent', 'ExampleModalComponent'],
    assetsFiles: [],
    additionalFiles: ['example-modal.component.ts', 'example-modal.component.html'],
    selectorName: ''
  },
  tabs: {
    title: 'Tabs',
    component: TabsComponent,
    componentNames: ['TabsComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  buttons: {
    title: 'Buttons',
    component: ButtonsComponent,
    componentNames: ['ButtonsComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  dividers: {
    title: 'Dividers',
    component: DividersComponent,
    componentNames: ['DividersComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  loading: {
    title: 'Loadings',
    component: LoadingComponent,
    componentNames: ['LoadingComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  banners: {
    title: 'Banners',
    component: BannersComponent,
    componentNames: ['BannersComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  icons: {
    title: 'Icons',
    component: IconsComponent,
    componentNames: ['IconsComponent'],
    assetsFiles: [],
    selectorName: ''
  },
  forms: {
    title: 'Forms',
    component: FormsComponent,
    componentNames: ['FormsComponent'],
    assetsFiles: [],
    selectorName: ''
  }
};

export { EXAMPLE_COMPONENTS };
