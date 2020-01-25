import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';

import { ButtonsTertiaryComponent } from './buttons-tertiary.component';

describe('ButtonsTertiaryComponent', () => {
  let component: ButtonsTertiaryComponent;
  let fixture: ComponentFixture<ButtonsTertiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsTertiaryComponent],
      imports: [MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
