import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDisplayComponent } from './typography-display.component';

describe('TypographyDisplayComponent', () => {
  let component: TypographyDisplayComponent;
  let fixture: ComponentFixture<TypographyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyDisplayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
