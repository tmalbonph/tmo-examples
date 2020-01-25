import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacersVerticalComponent } from './spacers-vertical.component';

describe('SpacersVerticalComponent', () => {
  let component: SpacersVerticalComponent;
  let fixture: ComponentFixture<SpacersVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacersVerticalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacersVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
