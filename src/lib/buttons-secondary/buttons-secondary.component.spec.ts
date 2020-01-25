import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';

import { ButtonsSecondaryComponent } from './buttons-secondary.component';

describe('ButtonsSecondaryComponent', () => {
  let component: ButtonsSecondaryComponent;
  let fixture: ComponentFixture<ButtonsSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsSecondaryComponent],
      imports: [MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
