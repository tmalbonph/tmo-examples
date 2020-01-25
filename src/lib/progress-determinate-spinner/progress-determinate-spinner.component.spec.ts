import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProgressDeterminateSpinnerComponent } from './progress-determinate-spinner.component';

describe('ProgressDeterminateSpinnerComponent', () => {
  let component: ProgressDeterminateSpinnerComponent;
  let fixture: ComponentFixture<ProgressDeterminateSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressDeterminateSpinnerComponent],
      imports: [MatProgressSpinnerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDeterminateSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
