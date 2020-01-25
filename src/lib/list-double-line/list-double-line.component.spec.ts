import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ListDoubleLineComponent } from './list-double-line.component';

describe('ListDoubleLineComponent', () => {
  let component: ListDoubleLineComponent;
  let fixture: ComponentFixture<ListDoubleLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDoubleLineComponent],
      imports: [MatIconModule, MatDividerModule, MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoubleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
