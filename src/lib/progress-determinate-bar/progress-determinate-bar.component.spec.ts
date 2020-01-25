import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProgressDeterminateBarComponent } from './progress-determinate-bar.component';

describe('ProgressDeterminateBarComponent', () => {
  let component: ProgressDeterminateBarComponent;
  let fixture: ComponentFixture<ProgressDeterminateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressDeterminateBarComponent],
      imports: [MatProgressBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDeterminateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
