import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'date-component',
    templateUrl: './date.component.html'
})
export class DateComponent implements OnChanges, OnInit {

    @Input() date: string;
    @Output() dateChange = new EventEmitter();

    day;
    month;
    year;
    hour;
    minute;

    constructor() {
        console.debug('ctor', this.date);
    }

    ngOnInit() {
        console.debug('ngOnInit', this.date);
    }

    ngOnChanges() {
        console.debug('ngOnChanges', this.date);

        let date = new Date(this.date);

        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();

        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }

    apply() {
        let date = new Date(this.year, this.month-1, this.day, this.hour, this.minute);
        let isoDate = date.toISOString();
        this.dateChange.emit(isoDate);
    }

}