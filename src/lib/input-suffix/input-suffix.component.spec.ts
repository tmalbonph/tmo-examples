import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputSuffixComponent } from './input-suffix.component';

describe('InputSuffixComponent', () => {
  let component: InputSuffixComponent;
  let fixture: ComponentFixture<InputSuffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSuffixComponent],
      imports: [MatFormFieldModule, MatIconModule, MatInputModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
