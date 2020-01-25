import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { PriceLockupTotalComponent } from './price-lockup-total.component';

describe('PriceLockupTotalComponent', () => {
  let component: PriceLockupTotalComponent;
  let fixture: ComponentFixture<PriceLockupTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceLockupTotalComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLockupTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
