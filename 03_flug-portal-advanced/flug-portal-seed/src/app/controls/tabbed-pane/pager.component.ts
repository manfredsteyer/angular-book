import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'flight-pager',
    template: `
        <button class="btn btn-default" (click)="prev()">&lt;&lt;</button>
        Tab #{{currentPage + 1}}
        <button class="btn btn-default" (click)="next()">&gt;&gt;</button>
    `
})
export class PagerComponent {
    @Input() currentPage: number;
    @Input() pageCount: number;
    @Output() currentPageChange = new EventEmitter<number>();

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
