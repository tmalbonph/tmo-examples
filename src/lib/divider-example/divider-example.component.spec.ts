import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { DividerExampleComponent } from './divider-example.component';

describe('DividerExampleComponent', () => {
  let component: DividerExampleComponent;
  let fixture: ComponentFixture<DividerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DividerExampleComponent],
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
