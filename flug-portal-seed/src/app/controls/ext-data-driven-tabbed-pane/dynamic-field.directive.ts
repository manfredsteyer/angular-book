import { Directive, TemplateRef, Input, OnInit } from '@angular/core';
import { ExtendedDataDrivenListTabComponent } from './ext-data-driven-list-tab.component';

@Directive({
    selector: '[flightDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

    // tslint:disable-next-line
    @Input('flightDynamicFieldOf') propertyName: string;

    constructor(public templateRef: TemplateRef<any>, private parent: ExtendedDataDrivenListTabComponent) {
    }

    ngOnInit() {
        this.parent.registerDynamicField(this);
    }
}
