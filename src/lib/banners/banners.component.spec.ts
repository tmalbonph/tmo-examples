import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { TmoComponentsModule } from '@tmo-docs/components';
import { BannersComponent } from './banners.component';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BannersComponent', () => {
  let component: BannersComponent;
  let fixture: ComponentFixture<BannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannersComponent],
      imports: [TmoComponentsModule, MatExpansionModule, MatIconModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
