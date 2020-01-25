import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TextFieldMaxRowsComponent } from './text-field-max-rows.component';

describe('TextFieldMaxRowsComponent', () => {
  let component: TextFieldMaxRowsComponent;
  let fixture: ComponentFixture<TextFieldMaxRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextFieldMaxRowsComponent],
      imports: [MatInputModule, MatIconModule, FormsModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldMaxRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
