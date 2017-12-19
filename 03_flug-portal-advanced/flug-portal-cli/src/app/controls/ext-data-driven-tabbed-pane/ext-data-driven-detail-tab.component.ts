import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { Component } from '@angular/core';

@Component({
    selector: 'flight-ext-dd-detail-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{ title }}</h2>
            <pre>{{ currentItem | json }}</pre>
        </div>
    `
})
export class ExtendedDataDrivenDetailTabComponent
                extends ExtendedDataDrivenTabComponent {

    get currentItem(): any {
        return this.tabbedPaneService.currentItem;
    }
}
