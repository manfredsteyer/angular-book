import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';

import { RoundTripDirective } from './roundtrip.validator';

@Component({
    template: `
<form #f="ngForm" flightRoundTrip>
        <input [(ngModel)]="from" name="from">
        <input [(ngModel)]="to" name="to">
</form>
`
})
class DummyComponent {
}

let fixture: ComponentFixture<DummyComponent>;
let rootFormGroup: NgForm;
let fromInput: HTMLInputElement;
let toInput: HTMLInputElement;
let compInstance: DummyComponent;


describe('RoundTripDirective', () => {

    beforeEach(async(() => {
        fixture = TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [RoundTripDirective, DummyComponent]
        }).createComponent(DummyComponent);

        fixture.detectChanges();

        const inputs: Array<DebugElement> = fixture.debugElement.queryAll(By.css('input'));
        fromInput = inputs[0].nativeElement;
        toInput = inputs[1].nativeElement;

        compInstance = fixture.componentInstance;

        const form: DebugElement = fixture.debugElement.query(By.directive(RoundTripDirective));

        // Zugang zur lokalen Variable #f welche die oberste FormGroup wiederspiegelt
        rootFormGroup = form.references['f'];

    }));

    it('should raise error if from and to city are the same location', () => {

        // Initial sind beide Input Felder leer weshalb round-trip einen Fehler wirft
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);

        fromInput.value = 'Graz';
        fromInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(false);
        expect(rootFormGroup.control.valid).toBe(true);

        toInput.value = 'Graz';
        toInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);

    });

    it('should get error object', () => {

        fromInput.value = 'Graz';
        fromInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(false);
        expect(rootFormGroup.control.valid).toBe(true);
        expect(rootFormGroup.control.errors).toBe(null);

        toInput.value = 'Graz';
        toInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);
        expect(rootFormGroup.control.errors).toEqual({
            'round-trip': {
                city: 'Graz'
            }
        });

    });


});
