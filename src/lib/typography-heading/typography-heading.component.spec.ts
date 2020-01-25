import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyHeadingComponent } from './typography-heading.component';

describe('TypographyHeadingComponent', () => {
  let component: TypographyHeadingComponent;
  let fixture: ComponentFixture<TypographyHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
