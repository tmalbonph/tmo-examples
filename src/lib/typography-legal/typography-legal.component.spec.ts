import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyLegalComponent } from './typography-legal.component';

describe('TypographyLegalComponent', () => {
    let component: TypographyLegalComponent;
    let fixture: ComponentFixture<TypographyLegalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypographyLegalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyLegalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
