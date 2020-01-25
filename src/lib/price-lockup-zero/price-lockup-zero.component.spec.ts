import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoComponentsModule } from '@tmo-docs/components';
import { PriceLockupZeroComponent } from './price-lockup-zero.component';

describe('PriceLockupZeroComponent', () => {
    let component: PriceLockupZeroComponent;
    let fixture: ComponentFixture<PriceLockupZeroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PriceLockupZeroComponent],
            imports: [TmoComponentsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PriceLockupZeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
