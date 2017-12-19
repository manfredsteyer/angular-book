import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-ext-dd-pager',
    template: `
        <button class="btn btn-default" (click)="prev()">&lt;&lt;</button>
        Tab #{{currentPage + 1}}
        <span *ngIf="label">(Current Record: {{label}})</span>
        <button class="btn btn-default" (click)="next()">&gt;&gt;</button>
    `
})
export class ExtendedDataDrivenPagerComponent {
    @Input() currentPage: number;
    @Input() pageCount: number;
    @Output() currentPageChange = new EventEmitter<number>();

    constructor(private tabbedPaneService: ExtendedAdvancedTabbedPaneService) {
    }

    get label() {
        return this.tabbedPaneService.currentLabel;
    }

    prev() {
        if (this.currentPage === 0) {
            return;
        }
        this.currentPageChange.next(this.currentPage - 1);
    }

    next() {
        if ((this.currentPage + 1) === this.pageCount) {
            return;
        }
        this.currentPageChange.next(this.currentPage + 1);
    }
}
