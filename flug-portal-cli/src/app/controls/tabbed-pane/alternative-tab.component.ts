import { Component, Input } from '@angular/core';

@Component({
    selector: 'flight-tab-alt',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class AlternativeTabComponent {
    @Input() public visible: boolean = false;
    @Input() public title: string;
}
