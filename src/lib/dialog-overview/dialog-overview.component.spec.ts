import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogOverviewComponent } from './dialog-overview.component';
import { Provider } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from '../tmo-examples.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('DialogOverviewComponent', () => {
  let component: DialogOverviewComponent;
  let fixture: ComponentFixture<DialogOverviewComponent>;

  const mockMatDialog = {
    closeAll: (): void => undefined
  };

  beforeEach(async(() => {
    const mockProviders: Provider[] = [
      { provide: MatDialog, useValue: mockMatDialog }
    ];

    TestBed.configureTestingModule({
      declarations: [DialogOverviewComponent],
      imports: [MatButtonModule, MatDialogModule, NoopAnimationsModule],
      providers: [{ provide: MatDialog, useValue: mockMatDialog }]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [DialogContentComponent] } }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('verify method `openDialog`', () => {
    component.openDialog();
  });
});
