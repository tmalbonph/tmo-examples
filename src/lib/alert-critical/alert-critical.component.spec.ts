import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCriticalComponent } from './alert-critical.component';
import { TmoComponentsModule } from '@tmo-docs/components';

describe('AlertCriticalComponent', () => {
  let component: AlertCriticalComponent;
  let fixture: ComponentFixture<AlertCriticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertCriticalComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCriticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
