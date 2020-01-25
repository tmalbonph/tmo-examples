import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatTooltipModule,
  MatGridListModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';

import { TmoComponentsModule } from '@tmo-docs/components';
import { ButtonsPrimaryComponent } from './buttons-primary/buttons-primary.component';

import { ButtonsSecondaryComponent } from './buttons-secondary/buttons-secondary.component';
import { ButtonsTertiaryComponent } from './buttons-tertiary/buttons-tertiary.component';
import { ButtonsHyperlinksComponent } from './buttons-hyperlinks/buttons-hyperlinks.component';
import { AlertCriticalComponent } from './alert-critical/alert-critical.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { DatepickerOverviewComponent } from './datepicker-overview/datepicker-overview.component';
import { DividerExampleComponent } from './divider-example/divider-example.component';
import { PriceLockupOriginalComponent } from './price-lockup-original/price-lockup-original.component';
import { PriceLockupTotalComponent } from './price-lockup-total/price-lockup-total.component';
import { PriceLockupPaymentComponent } from './price-lockup-payment/price-lockup-payment.component';
import { PriceLockupZeroComponent } from './price-lockup-zero/price-lockup-zero.component';
import { PriceLockupStandaloneComponent } from './price-lockup-standalone/price-lockup-standalone.component';
import { PriceLockupDiscountComponent } from './price-lockup-discount/price-lockup-discount.component';
import { ProgressDeterminateSpinnerComponent } from './progress-determinate-spinner/progress-determinate-spinner.component';
import { ProgressIndeterminateSpinnerComponent } from './progress-indeterminate-spinner/progress-indeterminate-spinner.component';
import { ProgressDeterminateBarComponent } from './progress-determinate-bar/progress-determinate-bar.component';
import { ProgressIndeterminateBarComponent } from './progress-indeterminate-bar/progress-indeterminate-bar.component';
import { SliderDiscreteComponent } from './slider-discrete/slider-discrete.component';
import { SliderContinuousComponent } from './slider-continuous/slider-continuous.component';
import { SpacersHorizontalComponent } from './spacers-horizontal/spacers-horizontal.component';
import { SpacersVerticalComponent } from './spacers-vertical/spacers-vertical.component';
import { TextFieldTooltipComponent } from './text-field-tooltip/text-field-tooltip.component';
import { TextFieldHintComponent } from './text-field-hint/text-field-hint.component';
import { TextFieldSuffixComponent } from './text-field-suffix/text-field-suffix.component';
import { TextFieldMaxRowsComponent } from './text-field-max-rows/text-field-max-rows.component';
import { TextFieldSelectorComponent } from './text-field-selector/text-field-selector.component';
import { TypographyDisplayComponent } from './typography-display/typography-display.component';
import { TypographyHeadingComponent } from './typography-heading/typography-heading.component';
import { TypographyBodyComponent } from './typography-body/typography-body.component';
import { TypographyLegalComponent } from './typography-legal/typography-legal.component';
import { AccordionOverviewComponent } from './accordion-overview/accordion-overview.component';
import { ChipsHorizontalComponent } from './chips-horizontal/chips-horizontal.component';
import { ChipsVerticalComponent } from './chips-vertical/chips-vertical.component';
import { DialogOverviewComponent, DialogContentComponent } from './dialog-overview/dialog-overview.component';
import { InputTooltipComponent } from './input-tooltip/input-tooltip.component';
import { InputHintComponent } from './input-hint/input-hint.component';
import { InputSuffixComponent } from './input-suffix/input-suffix.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { ListSingleLineComponent } from './list-single-line/list-single-line.component';
import { ListDoubleLineComponent } from './list-double-line/list-double-line.component';
import { ListTripleLineComponent } from './list-triple-line/list-triple-line.component';
import { PaginatorConfigurableComponent } from './paginator-configurable/paginator-configurable.component';
import { ControlToggleComponent } from './control-toggle/control-toggle.component';
import { ControlRadioComponent } from './control-radio/control-radio.component';
import { ControlCheckboxComponent } from './control-checkbox/control-checkbox.component';
import { TabGroupBasicComponent } from './tab-group-basic/tab-group-basic.component';
import { TooltipOverviewComponent } from './tooltip-overview/tooltip-overview.component';
import { ColorsComponent } from './colors/colors.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';
import { ModalsComponent } from './modals/modals.component';
import { ExampleModalComponent } from './modals/example-modal.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DividersComponent } from './dividers/dividers.component';
import { LoadingComponent } from './loading/loading.component';
import { BannersComponent } from './banners/banners.component';
import { IconsComponent } from './icons/icons.component';
import { FormsComponent } from './forms/forms.component';

const declarationsAndExports = [
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
  TooltipOverviewComponent,
  ColorsComponent,
  SpacingComponent,
  TypographyComponent,
  ModalsComponent,
  ExampleModalComponent,
  TabsComponent,
  ButtonsComponent,
  DividersComponent,
  LoadingComponent,
  BannersComponent,
  IconsComponent,
  FormsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTooltipModule,
    MatGridListModule,
    TmoComponentsModule
  ],
  declarations: [
    ...declarationsAndExports
  ],
  exports: [
    ...declarationsAndExports
  ],
  entryComponents: [DialogContentComponent]
})
export class TmoExamplesModule {}

export { ButtonsPrimaryComponent };
export { ButtonsSecondaryComponent };
export { ButtonsTertiaryComponent };
export { ButtonsHyperlinksComponent };
export { AlertCriticalComponent };
export { AlertWarningComponent };
export { DatepickerOverviewComponent };
export { DividerExampleComponent };
export { PriceLockupOriginalComponent };
export { PriceLockupTotalComponent };
export { PriceLockupPaymentComponent };
export { PriceLockupZeroComponent };
export { PriceLockupStandaloneComponent };
export { PriceLockupDiscountComponent };
export { ProgressDeterminateSpinnerComponent };
export { ProgressIndeterminateSpinnerComponent };
export { ProgressDeterminateBarComponent };
export { ProgressIndeterminateBarComponent };
export { SliderDiscreteComponent };
export { SliderContinuousComponent };
export { SpacersHorizontalComponent };
export { SpacersVerticalComponent };
export { TextFieldTooltipComponent };
export { TextFieldHintComponent };
export { TextFieldSuffixComponent };
export { TextFieldMaxRowsComponent };
export { TextFieldSelectorComponent };
export { TypographyDisplayComponent };
export { TypographyHeadingComponent };
export { TypographyBodyComponent };
export { TypographyLegalComponent };
export { AccordionOverviewComponent };
export { ChipsHorizontalComponent };
export { ChipsVerticalComponent };
export { DialogOverviewComponent };
export { DialogContentComponent };
export { InputTooltipComponent };
export { InputHintComponent };
export { InputSuffixComponent };
export { InputTextareaComponent };
export { InputSelectComponent };
export { ListSingleLineComponent };
export { ListDoubleLineComponent };
export { ListTripleLineComponent };
export { PaginatorConfigurableComponent };
export { ControlToggleComponent };
export { ControlRadioComponent };
export { ControlCheckboxComponent };
export { TabGroupBasicComponent };
export { TooltipOverviewComponent };
export { ColorsComponent };
export { SpacingComponent };
export { TypographyComponent };
export { ModalsComponent };
export { ExampleModalComponent };
export { TabsComponent };
export { ButtonsComponent };
export { DividersComponent };
export { LoadingComponent };
export { BannersComponent };
export { IconsComponent };
export { FormsComponent };
