import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ExampleModalComponent } from './example-modal.component';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ExampleModalComponent', () => {
    let component: ExampleModalComponent;
    let fixture: ComponentFixture<ExampleModalComponent>;
    const mockMatDialogRef = {
        close: () => { }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExampleModalComponent],
            imports: [MatPaginatorModule, MatIconModule, MatDialogModule, NoopAnimationsModule],
            providers: [{ provide: MatDialogRef, useValue: mockMatDialogRef },
            { provide: MAT_DIALOG_DATA, useValue: {} }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('verify method `onNoClick`', () => {
        spyOn(component.dialogRef, 'close');
        component.onNoClick();
        fixture.detectChanges();
        expect(component.dialogRef.close).toHaveBeenCalled();
    });
});
