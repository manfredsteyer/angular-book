import {
    Directive, ViewContainerRef, TemplateRef, Input, HostListener, EmbeddedViewRef, Renderer,
    ComponentFactoryResolver, Injector, ComponentRef
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
    selector: '[flightTooltip2]'
})
export class Tooltip2Directive {

    // tslint:disable-next-line
    @Input('flightTooltip2') message: string;

    private componentRef: ComponentRef<any>;

    constructor(
        private viewContainer: ViewContainerRef,
        private renderer: Renderer,
        private injector: Injector,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
    }

    @HostListener('mouseover', ['$event'])
    handleMouseover($event) {

        const compFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);

        const textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);

        const nativeElement = this.componentRef.location.nativeElement;

        const left = $event.target.offsetLeft + 'px';
        const top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';

        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    }

    @HostListener('mouseout')
    handleMouseout() {
        this.componentRef.destroy();
    }

}
