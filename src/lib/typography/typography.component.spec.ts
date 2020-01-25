import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyComponent } from './typography.component';
import { MatIconModule } from '@angular/material';

describe('TypographyComponent', () => {
    let component: TypographyComponent;
    let fixture: ComponentFixture<TypographyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypographyComponent],
            imports: [MatIconModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
