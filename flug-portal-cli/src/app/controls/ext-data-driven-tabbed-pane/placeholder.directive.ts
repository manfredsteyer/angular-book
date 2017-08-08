import { Directive, TemplateRef, Input, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
    selector: '[flightPlaceholder]'
})
export class PlaceholderDirective implements OnInit {
    @Input() flightPlaceholder: TemplateRef<any>;
    @Input() value: any;

    constructor(private viewContainer: ViewContainerRef) {
    }

    ngOnInit() {
        const context = { $implicit: this.value };
        this.viewContainer.createEmbeddedView(this.flightPlaceholder, context);
    }
}
