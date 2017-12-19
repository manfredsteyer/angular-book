import { Component, OnInit, Input } from '@angular/core';
import { DataDrivenTabbedPaneComponent } from './data-driven-tabbed-pane.component';
import { AdvancedTabbedPaneService } from './data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-dd-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class DataDrivenTabComponent implements OnInit {
    public visible: boolean = false;
    @Input() public title: string;

    constructor(
        public tabs: DataDrivenTabbedPaneComponent,
        public tabbedPaneService: AdvancedTabbedPaneService) {
    }

    ngOnInit() {
        this.tabs.register(this);
    }
}
