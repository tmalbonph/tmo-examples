import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOverviewComponent } from './accordion-overview.component';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionOverviewComponent', () => {
  let component: AccordionOverviewComponent;
  let fixture: ComponentFixture<AccordionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionOverviewComponent],
      imports: [MatExpansionModule, MatIconModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
