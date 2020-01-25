import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TooltipOverviewComponent } from './tooltip-overview.component';

describe('TooltipOverviewComponent', () => {
  let component: TooltipOverviewComponent;
  let fixture: ComponentFixture<TooltipOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipOverviewComponent],
      imports: [MatTooltipModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
