import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { PriceLockupStandaloneComponent } from './price-lockup-standalone.component';

describe('PriceLockupStandaloneComponent', () => {
  let component: PriceLockupStandaloneComponent;
  let fixture: ComponentFixture<PriceLockupStandaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceLockupStandaloneComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLockupStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
