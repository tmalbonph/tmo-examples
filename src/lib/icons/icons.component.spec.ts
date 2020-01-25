import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IconsComponent } from './icons.component';
import { MatGridListModule } from '@angular/material';

describe('IconsComponent', () => {
    let component: IconsComponent;
    let fixture: ComponentFixture<IconsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconsComponent],
            imports: [MatIconModule, MatGridListModule, NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
