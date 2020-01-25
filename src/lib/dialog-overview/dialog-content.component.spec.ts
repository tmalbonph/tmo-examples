import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DialogContentComponent } from './dialog-overview.component';
import { Provider } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogContentComponent', () => {
  let component: DialogContentComponent;
  let fixture: ComponentFixture<DialogContentComponent>;

  const mockMatDialog = {
    closeAll: (): void => undefined
  };

  beforeEach(async(() => {
    const mockProviders: Provider[] = [
      { provide: MatDialog, useValue: mockMatDialog }
    ];

    TestBed.configureTestingModule({
      declarations: [DialogContentComponent],
      imports: [MatButtonModule, MatDialogModule, NoopAnimationsModule],
      providers: [MatDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
