import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material';

import { ChipsHorizontalComponent } from './chips-horizontal.component';

describe('ChipsHorizontalComponent', () => {
  let component: ChipsHorizontalComponent;
  let fixture: ComponentFixture<ChipsHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsHorizontalComponent],
      imports: [MatChipsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
