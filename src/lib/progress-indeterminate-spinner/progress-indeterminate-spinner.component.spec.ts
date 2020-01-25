import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProgressIndeterminateSpinnerComponent } from './progress-indeterminate-spinner.component';

describe('ProgressIndeterminateSpinnerComponent', () => {
  let component: ProgressIndeterminateSpinnerComponent;
  let fixture: ComponentFixture<ProgressIndeterminateSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressIndeterminateSpinnerComponent],
      imports: [MatProgressSpinnerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndeterminateSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
