import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupBasicComponent } from './tab-group-basic.component';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TabGroupBasicComponent', () => {
  let component: TabGroupBasicComponent;
  let fixture: ComponentFixture<TabGroupBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupBasicComponent],
      imports: [MatTabsModule, MatIconModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
