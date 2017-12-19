import { NgModule } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager.component';
import { AlternativeTabbedPaneComponent } from './alternative-tabbed-pane.component';
import { AlternativeTabComponent } from './alternative-tab.component';
import { TabPrototypeComponent } from './tab-prototype.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        TabbedPaneComponent,
        TabComponent,
        AlternativeTabbedPaneComponent,
        AlternativeTabComponent,
        PagerComponent,

        TabPrototypeComponent
    ],
    exports: [
        TabbedPaneComponent,
        TabComponent,
        AlternativeTabbedPaneComponent,
        AlternativeTabComponent,

        TabPrototypeComponent
    ]
})
export class TabbedPaneModule {
}
