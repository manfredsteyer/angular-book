import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit {

    bookings = [
        {
            from: 'Graz',
            to: 'Hamburg',
            passengers: 3,
            children: 1,
            returnFlight: 'yes',
            date: new Date('2016-04-26T12:00')
        },
        {
            from: 'Graz',
            to: 'Hamburg',
            passengers: 1,
            children: 0,
            returnFlight: 'no',
            date: new Date('2016-05-27T12:00')
        },
        {
            from: 'Hamburg',
            to: 'Graz',
            passengers: 6,
            children: 4,
            returnFlight: 'no',
            date: new Date('2016-08-21T12:00')
        }
    ];
    params = {
        direction: '=>',
        age: '<12'
    };
    bookingTranslation;

    constructor(private translate: TranslateService) {
    }

    selectLang(lang) {
        this.translate.use(lang);
    }

    ngOnInit() {
        this.translate.get('BOOKINGS').subscribe(res => this.bookingTranslation = res);

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.translate.get('BOOKINGS').subscribe(res => this.bookingTranslation = res);
        });
    }
}
