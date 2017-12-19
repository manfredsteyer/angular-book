import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    DataDrivenTabbedPaneComponent,
    DataDrivenTabComponent,
    DataDrivenPagerComponent,
    DataDrivenListTabComponent,
    DataDrivenDetailTabComponent,
} from '../data-driven-tabbed-pane';
import { DataDrivenInheritanceListTabComponent } from './data-driven-inheritance-list-tab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataDrivenTabbedPaneComponent,
        DataDrivenTabComponent,
        DataDrivenPagerComponent,
        DataDrivenListTabComponent,
        DataDrivenDetailTabComponent,
        DataDrivenInheritanceListTabComponent
    ],
    exports: [
        DataDrivenTabbedPaneComponent,
        DataDrivenTabComponent,
        DataDrivenListTabComponent,
        DataDrivenDetailTabComponent,
        DataDrivenInheritanceListTabComponent
    ]
})
export class DataDrivenTabbedPaneModule {
}
