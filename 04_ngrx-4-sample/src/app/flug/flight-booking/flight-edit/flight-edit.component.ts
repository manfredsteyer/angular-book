import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    template: `
        <h1>{{info}}</h1>
        <p>
            ... Hier könnte auch der Flug mit der Id {{id}} stehen ...
        </p>
        
        <div *ngIf="exitWarning.show" class="alert alert-warning">
        <div>
            Daten wurden nicht gespeichert! Trotzdem Maske verlassen?
        </div>
        <div>
            <a href="javascript:void(0)" (click)="decide(true)" class="btn btn-danger">Ja</a>
            <a href="javascript:void(0)" (click)="decide(false)" class="btn btn-default">Nein</a>
        </div>
</div>



    `
})
export class FlightEditComponent {
    public info = "FlightEdit";

    public id: string;

    constructor(route: ActivatedRoute) {
        route.params.subscribe(p => {
            this.id = p['id'];
        })
    }

    private exitWarning = {
        show: false,
        resolve: null
    }

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }

    canDeactivate(): Promise<boolean> {
        this.exitWarning.show = true;
        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        })
    }
}