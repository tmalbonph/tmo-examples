import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputTooltipComponent } from './input-tooltip.component';

describe('InputTooltipComponent', () => {
  let component: InputTooltipComponent;
  let fixture: ComponentFixture<InputTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTooltipComponent],
      imports: [MatInputModule, MatIconModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
