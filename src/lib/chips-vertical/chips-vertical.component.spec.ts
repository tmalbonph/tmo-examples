import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material';

import { ChipsVerticalComponent } from './chips-vertical.component';

describe('ChipsVerticalComponent', () => {
  let component: ChipsVerticalComponent;
  let fixture: ComponentFixture<ChipsVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsVerticalComponent],
      imports: [MatChipsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
