import { async, TestBed } from '@angular/core/testing';
import { TmoExamplesModule } from './tmo-examples.module';

describe('TmoExamplesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TmoExamplesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TmoExamplesModule).toBeDefined();
  });
});
