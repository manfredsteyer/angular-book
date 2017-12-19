import { Component} from '@angular/core';

@Component({
    template: `
        <h1>{{info}}</h1>
    `
})
export class FlightHistoryComponent {
    public info = "Flight History";
}