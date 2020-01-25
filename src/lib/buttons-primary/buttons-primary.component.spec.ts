import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPrimaryComponent } from './buttons-primary.component';
import { MatButtonModule } from '@angular/material';

describe('ButtonsPrimaryComponent', () => {
  let component: ButtonsPrimaryComponent;
  let fixture: ComponentFixture<ButtonsPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsPrimaryComponent],
      imports: [MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
