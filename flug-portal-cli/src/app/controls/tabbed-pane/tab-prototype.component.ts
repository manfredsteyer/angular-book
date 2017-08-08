import { Component, OnInit, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';

// Teilweise Implementierung des Tab-Controls
// Wird im Buch verwändet, um einen Zwischenstand
// zu präsentieren, der nach und nach zum Ergebnis
// führt.

@Component({
    selector: 'flight-tab-prototype',
    template: `
        <div>
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class TabPrototypeComponent {
    @Input() public title: string;
}
