import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertWarningComponent } from './alert-warning.component';

import { TmoComponentsModule } from '@tmo-docs/components';

describe('AlertWarningComponent', () => {
  let component: AlertWarningComponent;
  let fixture: ComponentFixture<AlertWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertWarningComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
