import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './forms.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatSlideToggleModule, MatCheckboxModule, MatInputModule } from '@angular/material';

describe('FormsComponent', () => {
    let component: FormsComponent;
    let fixture: ComponentFixture<FormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormsComponent],
            imports: [FormsModule,
                ReactiveFormsModule,
                MatSelectModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                MatRadioModule,
                MatSlideToggleModule,
                MatCheckboxModule,
                NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('verify method `ngOnInit`', () => {
        component.ngOnInit();
        expect(component.contactForm.controls.firstName.value).toBe('');
        expect(component.contactForm.controls.lastName.value).toBe('');
        expect(component.contactForm.controls.email.value).toBe('');
    });

    it('verify method `isInvalid`', () => {
        const formControl = new FormControl();
        expect(component.isInvalid(formControl)).toBeFalsy();
    });
});
