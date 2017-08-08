import { DataDrivenTabComponent } from './data-driven-tab.component';
import { Component } from '@angular/core';

@Component({
    selector: 'flight-dd-detail-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{ title }}</h2>
            <pre>{{ currentItem | json }}</pre>
        </div>
    `
})
export class DataDrivenDetailTabComponent
                extends DataDrivenTabComponent {

    get currentItem(): any {
        return this.tabbedPaneService.currentItem;
    }
}
