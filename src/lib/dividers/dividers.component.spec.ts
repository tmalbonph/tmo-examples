import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule, MatDividerModule } from '@angular/material';
import { DividersComponent } from '@tmo-docs/examples';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DividersComponent', () => {
    let component: DividersComponent;
    let fixture: ComponentFixture<DividersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DividersComponent],
            imports: [MatTabsModule,
                MatDividerModule,
                NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DividersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
