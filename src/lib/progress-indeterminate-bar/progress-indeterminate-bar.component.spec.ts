import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProgressIndeterminateBarComponent } from './progress-indeterminate-bar.component';

describe('ProgressIndeterminateBarComponent', () => {
  let component: ProgressIndeterminateBarComponent;
  let fixture: ComponentFixture<ProgressIndeterminateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressIndeterminateBarComponent],
      imports: [MatProgressBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndeterminateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
