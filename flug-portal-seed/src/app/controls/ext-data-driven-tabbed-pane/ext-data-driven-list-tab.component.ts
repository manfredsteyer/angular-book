import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { ExtendedDataDrivenTabbedPaneComponent } from './ext-data-driven-tabbed-pane.component';
import { OnInit, Component, Input } from '@angular/core';
import { DynamicFieldDirective } from './dynamic-field.directive';

@Component({
    selector: 'flight-ext-dd-list-tab',
    styles: [`
        a {
            cursor: pointer;
            text-decoration: underline;
        }
    `],
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>

            <table class="table">
                <tr *ngFor="let item of items" [class.active]="item == currentItem">
                    <td *ngFor="let p of displayProperties">

                        <span *ngIf="dynamicFields[p]" [flightPlaceholder]="dynamicFields[p].templateRef" [value]="item[p]">
                        </span>

                        <span *ngIf="!dynamicFields[p]">
                            {{item[p]}}
                        </span>

                    </td>
                    <td><a (click)="select(item)">Select</a></td>
                </tr>
            </table>
        </div>
    `
})
export class ExtendedDataDrivenListTabComponent
                extends ExtendedDataDrivenTabComponent {

    private dynamicFields: { [key: string]: DynamicFieldDirective } = {};

    registerDynamicField(field: DynamicFieldDirective ) {
        this.dynamicFields[field.propertyName] = field;
    }

    get items(): any[] {
        return this.tabbedPaneService.items;
    }

    get displayProperties(): string[] {
        return this.tabbedPaneService.displayProperties;
    }

    get currentItem(): any {
        return this.tabbedPaneService.currentItem;
    }

    select(item: any): void {
        this.tabbedPaneService.currentItem = item;
        this.tabbedPaneService.currentLabel = item[this.displayProperties[0]];
    }

    // Diese Wiederholung ist seit Version 2.3 nicht mehr
    // nötig, da Metadaten nun runtervererbt werden
    /*
    @Input() public title: string;

    constructor(public tabs: ExtendedDataDrivenTabbedPaneComponent) {
        super(tabs);
    }

    ngOnInit() {
        super.ngOnInit();
    }
    */
}
