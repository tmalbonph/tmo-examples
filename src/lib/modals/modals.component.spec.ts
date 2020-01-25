import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModalsComponent } from './modals.component';
import { MatIconModule } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExampleModalComponent } from './example-modal.component';

describe('ModalsComponent', () => {
    let component: ModalsComponent;
    let fixture: ComponentFixture<ModalsComponent>;
    const mockMatDialogRef = {
        close: () => { }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalsComponent, ExampleModalComponent],
            imports: [MatPaginatorModule, MatIconModule, MatDialogModule, NoopAnimationsModule],
            providers: [{ provide: MatDialogRef, useValue: mockMatDialogRef },
            { provide: MAT_DIALOG_DATA, useValue: {} }, MatDialog,ExampleModalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('verify method `openDialog`', () => {
        component.openDialog();
    });
});
