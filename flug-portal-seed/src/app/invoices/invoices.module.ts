import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesSearchWithDataDrivenTabsComponent } from './invoices-search-with-dd-tabs.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { INVOICES_ROUTES_CONFIG } from './invoices.routes';
import { TabbedPaneModule } from '../controls/tabbed-pane/tabbed-pane.module';
import { DataDrivenTabbedPaneModule } from '../controls/data-driven-tabbed-pane/data-driven-tabbed-pane.module';
import { InvoicesSearchWithAltTabsComponent } from './invoices-search-with-alt-tabs.component';
import { InvoicesSearchWithTabsComponent } from './invoices-search-with-tabs.component';
import { InvoicesSearchFirstStepsPartialComponent } from './invoices-search-first-steps-partial.component';
import { ExtendedDataDrivenTabbedPaneModule } from '../controls/ext-data-driven-tabbed-pane/ext-data-driven-tabbed-pane.module';
import { InvoicesSearchWithExtendedDataDrivenTabsComponent } from './invoices-search-with-ext-dd-tabs.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(INVOICES_ROUTES_CONFIG),
        TabbedPaneModule,
        DataDrivenTabbedPaneModule,
        ExtendedDataDrivenTabbedPaneModule
    ],
    declarations: [
        InvoicesSearchWithTabsComponent,
        InvoicesSearchWithAltTabsComponent,
        InvoicesSearchWithDataDrivenTabsComponent,
        InvoicesSearchWithExtendedDataDrivenTabsComponent,

        InvoicesSearchFirstStepsPartialComponent
    ]
})
export class InvoicesModule {
}
