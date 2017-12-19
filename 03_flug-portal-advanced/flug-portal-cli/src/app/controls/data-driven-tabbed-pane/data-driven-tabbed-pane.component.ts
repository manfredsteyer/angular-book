import { Component, AfterContentInit, Input, OnInit } from '@angular/core';
import { DataDrivenTabComponent } from './data-driven-tab.component';
import { AdvancedTabbedPaneService } from './data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-dd-tabbed-pane',
    providers: [AdvancedTabbedPaneService],
    styles: [`
        .tabbed-pane {
            background-color:#f7ecb5;
            padding:20px;
        }

        a {
            cursor:pointer;
            text-decoration: underline;
        }
    `],
    template: `
        <div class="tabbed-pane">

            <span *ngFor="let tab of tabs" style="padding-right:20px;">
                <a (click)="activate(tab)">{{tab.title}}</a>
            </span>

            <ng-content></ng-content>

            <flight-dd-pager
                [currentPage]="currentPage"
                (currentPageChange)="activatePage($event)"
                [pageCount]="tabsCount">
            </flight-dd-pager>
        </div>

    `
})
export class DataDrivenTabbedPaneComponent
                implements OnInit, AfterContentInit {

    tabs: Array<DataDrivenTabComponent> = [];
    currentPage: number = 0;

    @Input() items: any[] = [];
    @Input() displayProperties: string[] = [];

    constructor(private tabbedPaneService: AdvancedTabbedPaneService) {
    }

    ngOnInit() {
        this.tabbedPaneService.items = this.items;
        this.tabbedPaneService.displayProperties = this.displayProperties;
    }

    get tabsArray() {
        return this.tabs;
    }

    get tabsCount() {
        if (this.tabs) {
            return this.tabs.length;
        }
        return 0;
    }

    public register(tab: DataDrivenTabComponent) {
        this.tabs.push(tab);
    }

    public activate(active: DataDrivenTabComponent) {
        for (const tab of this.tabs) {
            tab.visible = (tab === active);
        }
        this.currentPage = this.tabs.indexOf(active);
    }

    public activatePage(pageNumber: number) {
        this.currentPage = pageNumber;
        this.activate(this.tabs[pageNumber]);
    }

    ngAfterContentInit() {
        if (this.tabs.length === 0) {
            return;
        }
        this.activate(this.tabs[0]);
    }
}
