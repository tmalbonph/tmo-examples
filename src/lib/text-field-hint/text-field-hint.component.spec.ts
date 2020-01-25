import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldHintComponent } from './text-field-hint.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TextFieldHintComponent', () => {
  let component: TextFieldHintComponent;
  let fixture: ComponentFixture<TextFieldHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextFieldHintComponent],
      imports: [MatInputModule, MatIconModule, FormsModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
