import { DataDrivenTabComponent } from './data-driven-tab.component';
import { DataDrivenTabbedPaneComponent } from './data-driven-tabbed-pane.component';
import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'flight-dd-inheritance-list-tab',
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
                    <td *ngFor="let p of displayProperties">{{item[p]}}</td>
                    <td><a (click)="select(item)">Select</a></td>
                </tr>
            </table>
        </div>
    `
})
export class DataDrivenInheritanceListTabComponent
                // implements OnInit
                extends DataDrivenTabComponent {

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
