import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { PriceLockupPaymentComponent } from './price-lockup-payment.component';

describe('PriceLockupPaymentComponent', () => {
  let component: PriceLockupPaymentComponent;
  let fixture: ComponentFixture<PriceLockupPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceLockupPaymentComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLockupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
