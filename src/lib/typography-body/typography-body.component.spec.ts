import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyBodyComponent } from './typography-body.component';

describe('TypographyBodyComponent', () => {
  let component: TypographyBodyComponent;
  let fixture: ComponentFixture<TypographyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyBodyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
