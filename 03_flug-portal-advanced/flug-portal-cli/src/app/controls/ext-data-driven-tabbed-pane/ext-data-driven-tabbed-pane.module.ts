import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedDataDrivenTabbedPaneComponent } from './ext-data-driven-tabbed-pane.component';
import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { ExtendedDataDrivenPagerComponent } from './ext-data-driven-pager.component';
import { ExtendedDataDrivenListTabComponent } from './ext-data-driven-list-tab.component';
import { ExtendedDataDrivenDetailTabComponent } from './ext-data-driven-detail-tab.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ExtendedDataDrivenTabbedPaneComponent,
        ExtendedDataDrivenTabComponent,
        ExtendedDataDrivenPagerComponent,
        ExtendedDataDrivenListTabComponent,
        ExtendedDataDrivenDetailTabComponent,
        PlaceholderDirective,
        DynamicFieldDirective
    ],
    exports: [
        ExtendedDataDrivenTabbedPaneComponent,
        ExtendedDataDrivenTabComponent,
        ExtendedDataDrivenListTabComponent,
        ExtendedDataDrivenDetailTabComponent,
        DynamicFieldDirective
    ]
})
export class ExtendedDataDrivenTabbedPaneModule {
}
