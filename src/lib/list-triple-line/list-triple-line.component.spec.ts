import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ListTripleLineComponent } from './list-triple-line.component';

describe('ListTripleLineComponent', () => {
  let component: ListTripleLineComponent;
  let fixture: ComponentFixture<ListTripleLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListTripleLineComponent],
      imports: [MatIconModule, MatDividerModule, MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTripleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
