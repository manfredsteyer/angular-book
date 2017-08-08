import { Component, ContentChildren, AfterViewInit, QueryList, ViewChild, AfterContentInit } from '@angular/core';
import { AlternativeTabComponent } from './alternative-tab.component';
import { PagerComponent } from './pager.component';

@Component({
    selector: 'flight-tabbed-pane-alt',
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

    // template: `
    //     <div class="tabbed-pane">
    //         <span *ngFor="let tab of tabs.toArray()" style="padding-right:20px;">
    //             <a (click)="activate(tab)">{{tab.title}}</a>
    //         </span>
    //
    //         <ng-content></ng-content>
    //
    //         <flight-pager
    //             #pager
    //             (currentPageChange)="activatePage($event)"
    //             [pageCount]="tabsArray.length">
    //         </flight-pager>
    //
    //     </div>
    // `

    template: `
        <div class="tabbed-pane">
            
            <ng-template [flightUnless]="tabsArray.length === 0">
                <div>
                    Please choose for a tab.
                </div>
            </ng-template>

            <div ngTemplate="flightUnless: tabsArray.length === 0">
                Please choose for a tab.
            </div>

            <div *flightUnless="tabsArray.length === 0">
                Please choose for a tab.
            </div>

            <span *ngFor="let tab of tabsArray" style="padding-right:20px;">
                <a (click)="activate(tab)">{{tab.title}}</a>
            </span>
            
            <ng-template flightRepeate [flightRepeateOf]="tabsArray" let-tab let-i="index">
                <span style="padding-right:20px;">
                    <a (click)="activate(tab)">{{tab.title}} ({{i + 1}})</a>
                </span>
            </ng-template>

            
            <span template="flightRepeate: let tab of tabsArray; let i=index" style="padding-right:20px;">
                            <a (click)="activate(tab)">{{tab.title}} ({{i + 1}})</a>
                        </span>
                     
            <span *flightRepeate="let tab of tabsArray; let i=index" style="padding-right:20px;">
                <a (click)="activate(tab)">{{tab.title}} ({{i + 1}})</a>
            </span>
   
            <ng-content></ng-content>

            <flight-pager
                #pager
                (currentPageChange)="activatePage($event)"
                [pageCount]="tabsArray.length">
            </flight-pager>

        </div>
    `
})
export class AlternativeTabbedPaneComponent implements AfterViewInit, AfterContentInit {

    @ContentChildren(AlternativeTabComponent)
    tabs: QueryList<AlternativeTabComponent>;

    @ViewChild('pager')
    pager: PagerComponent;

    currentPage: number = 0;

    // Use this Getter to get an array with all TabComponents
    get tabsArray(): AlternativeTabComponent[] {
        return this.tabs.toArray();
    }

    get tabsCount() {
        if (!this.tabs) {
            return 0;
        }

        const array: Array<AlternativeTabComponent> = this.tabs.toArray();

        if (!array) {
            return 0;
        }

        return array.length;
    }

    constructor() {
    }

    ngAfterContentInit() {
        if (this.tabsArray.length === 0) {
            return;
        }
        this.activate(this.tabsArray[0]);
    }

    ngAfterViewInit() {
        this.pager.currentPage = 0;
    }

    public activate(active: AlternativeTabComponent) {
        for (const tab of this.tabsArray) {
            tab.visible = (tab === active);
        }

        this.currentPage = this.tabsArray.indexOf(active);
        this.pager.currentPage = this.currentPage;
    }

    public activatePage(pageNumber: number) {
        this.currentPage = pageNumber;
        this.activate(this.tabsArray[pageNumber]);
    }
}
