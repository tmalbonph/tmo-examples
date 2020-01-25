import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewComponent } from './datepicker-overview.component';
import { TmoComponentsModule } from '@tmo-docs/components';
import { MatNativeDateModule,  MatDatepickerModule } from '@angular/material';


describe('DatepickerOverviewComponent', () => {
  let component: DatepickerOverviewComponent;
  let fixture: ComponentFixture<DatepickerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerOverviewComponent],
      imports: [TmoComponentsModule, 
        MatDatepickerModule,
        MatNativeDateModule],
      providers: [MatDatepickerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
