import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';

import { ButtonsHyperlinksComponent } from './buttons-hyperlinks.component';

describe('ButtonsHyperlinksComponent', () => {
  let component: ButtonsHyperlinksComponent;
  let fixture: ComponentFixture<ButtonsHyperlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsHyperlinksComponent],
      imports: [MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsHyperlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
