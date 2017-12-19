import { Component, AfterContentInit, Input, OnInit } from '@angular/core';
import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-ext-dd-tabbed-pane',
    providers: [ExtendedAdvancedTabbedPaneService],
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

            <flight-ext-dd-pager
                [currentPage]="currentPage"
                (currentPageChange)="activatePage($event)"
                [pageCount]="tabsCount">
            </flight-ext-dd-pager>
        </div>

    `
})
export class ExtendedDataDrivenTabbedPaneComponent
                implements OnInit, AfterContentInit {

    tabs: Array<ExtendedDataDrivenTabComponent> = [];
    currentPage: number = 0;

    @Input() items: any[] = [];
    @Input() displayProperties: string[] = [];

    constructor(private tabbedPaneService: ExtendedAdvancedTabbedPaneService) {
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

    public register(tab: ExtendedDataDrivenTabComponent) {
        this.tabs.push(tab);
    }

    public activate(active: ExtendedDataDrivenTabComponent) {
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
