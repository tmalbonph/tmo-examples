import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { PriceLockupOriginalComponent } from './price-lockup-original.component';

describe('PriceLockupOriginalComponent', () => {
  let component: PriceLockupOriginalComponent;
  let fixture: ComponentFixture<PriceLockupOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceLockupOriginalComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLockupOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
