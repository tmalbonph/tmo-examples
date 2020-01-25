import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ListSingleLineComponent } from './list-single-line.component';

describe('ListSingleLineComponent', () => {
  let component: ListSingleLineComponent;
  let fixture: ComponentFixture<ListSingleLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSingleLineComponent],
      imports: [MatIconModule, MatDividerModule, MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
