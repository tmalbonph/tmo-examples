import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material';

import { ControlCheckboxComponent } from './control-checkbox.component';

describe('ControlCheckboxComponent', () => {
  let component: ControlCheckboxComponent;
  let fixture: ComponentFixture<ControlCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlCheckboxComponent],
      imports: [MatCheckboxModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
