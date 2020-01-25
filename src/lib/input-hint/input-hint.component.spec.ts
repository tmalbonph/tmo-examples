import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputHintComponent } from './input-hint.component';

describe('InputHintComponent', () => {
  let component: InputHintComponent;
  let fixture: ComponentFixture<InputHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputHintComponent],
      imports: [MatIconModule, MatInputModule, FormsModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
