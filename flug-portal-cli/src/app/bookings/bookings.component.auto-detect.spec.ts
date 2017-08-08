import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookingsComponent } from './bookings.component';

let fixture: ComponentFixture<BookingsComponent>;
let h1: HTMLElement;

describe('BookingsComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BookingsComponent],
            providers: [
                {provide: ComponentFixtureAutoDetect, useValue: true}
            ]
        });
        fixture = TestBed.createComponent(BookingsComponent);
        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    });

    it('should display Bookings title', () => {
        expect(h1.textContent).toBe('Bookings');
    });

    it('should change Bookings title', () => {
        fixture.componentInstance.title = 'changed title';
        fixture.detectChanges();
        expect(h1.textContent).toBe('changed title');
    });

});
