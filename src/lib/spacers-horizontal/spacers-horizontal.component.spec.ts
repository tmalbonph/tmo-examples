import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacersHorizontalComponent } from './spacers-horizontal.component';

describe('SpacersHorizontalComponent', () => {
  let component: SpacersHorizontalComponent;
  let fixture: ComponentFixture<SpacersHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacersHorizontalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacersHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
