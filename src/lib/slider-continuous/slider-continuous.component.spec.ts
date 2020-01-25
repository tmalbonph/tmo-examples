import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';

import { SliderContinuousComponent } from './slider-continuous.component';

describe('SliderContinuousComponent', () => {
  let component: SliderContinuousComponent;
  let fixture: ComponentFixture<SliderContinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderContinuousComponent],
      imports: [MatSliderModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
