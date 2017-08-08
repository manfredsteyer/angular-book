import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AdvancedTabbedPaneService } from './data-driven-tabbed-pane.service';

@Component({
    selector: 'flight-dd-pager',
    template: `
        <button class="btn btn-default" (click)="prev()">&lt;&lt;</button>
        Tab #{{currentPage + 1}}
        <span *ngIf="label">(Current Record: {{label}})</span>
        <button class="btn btn-default" (click)="next()">&gt;&gt;</button>
    `
})
export class DataDrivenPagerComponent {
    @Input() currentPage: number;
    @Input() pageCount: number;
    @Output() currentPageChange = new EventEmitter<number>();

    constructor(private tabbedPaneService: AdvancedTabbedPaneService) {
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
