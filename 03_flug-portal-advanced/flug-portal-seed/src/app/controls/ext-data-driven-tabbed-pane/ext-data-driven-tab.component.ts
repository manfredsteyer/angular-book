import { Component, OnInit, Input } from '@angular/core';
import { ExtendedDataDrivenTabbedPaneComponent } from './ext-data-driven-tabbed-pane.component';
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-ext-dd-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class ExtendedDataDrivenTabComponent implements OnInit {
    public visible: boolean = false;
    @Input() public title: string;

    constructor(
        public tabs: ExtendedDataDrivenTabbedPaneComponent,
        public tabbedPaneService: ExtendedAdvancedTabbedPaneService) {
    }

    ngOnInit() {
        console.log('register', this);
        this.tabs.register(this);
    }
}
