import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/combineLatest';

import { AuthService } from '../../shared/auth/auth.service';

class Producer {
    interval: any;
    private listener = [];
    addListener = fn => this.listener.push(fn);

    constructor(id) {
        let count = 0;
        this.interval = setInterval(() => {
            count++;
            console.log('Producer ' + id + ': ' + count);
            this.listener.forEach(fn => fn(count));
        }, 1000);
    }
}

@Component({
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent implements OnInit, OnDestroy {
    blackList: Array<any>;

    timeSubscription: Subscription;
    producer = new Producer('Hot-Observable');
    hotSubscription: Subscription;
    coldSubscription: Subscription;
    timeObservable: Observable<any>;

    inputSubject: BehaviorSubject<any>;
    listObservable: Observable<any>;
    loading: Boolean = true;

    name: string;

    hotColdTimeout: any;


    constructor(authService: AuthService, private http: Http) {

        this.name = authService.userName;

        // Dem Observable wird ein Array mit dem Operator .from bereitgestellt
        Observable.from(['Claudia', 'Fritz', 'Peter'])
        // Mit dem Operator .map wird der Wert verändert
            .map(person => person.toUpperCase())
            .subscribe({
                // Jeder Array Wert wird nach Durchlauf der Sequenz der Callback-Funktion next übergeben
                next: (person) => {
                    console.log('Person in Großbuchstaben: ' + person);
                },
                // Wenn alle Personen durchlaufen sind ist der Stream beendet und complete wird aufgerufen
                complete: () => {
                    console.log('Alle Personen durchlaufen');
                }
            });

    }

    ngOnInit() {

        // Teil 1
        const observer = {
            next: resp => this.blackList = resp,
            error: err => console.error('Observer erhält einen Fehler: ' + err),
            complete: () => console.log('Abarbeitung der Flugverbotsliste ist abgeschlossen'),
        };

        Observable.create(obsrv => {
            obsrv.next('Claudia');
            obsrv.next('Fritz');
            setTimeout(() => {
                obsrv.next('Peter');
                obsrv.complete();
            }, 1000);
        })
            .do(res => console.log(new Date().getSeconds(), res))
            .map((resp, index) => {
                return {
                    id: index,
                    name: resp
                };
            })
            .toArray()
            .subscribe(observer);
        // ----


        // Teil 2
        this.timeObservable = Observable.interval(1000)
            .startWith(0)
            .map(resp => new Date())
            .do(resp => console.log('Observable mit interval in Millisekunde: ' + resp.getMilliseconds()))
            .share();

        this.timeSubscription = this.timeObservable.subscribe(resp => {
            console.log('Observer erhält ein Datum in Millisekunde: ' + resp.getMilliseconds() + '\n--');
        });

        this.hotColdTimeout = setTimeout(() => {
            // Cold Observable
            const coldObservable = Observable.create(obsrv => {
                const producer = new Producer('Cold-Observable');
                producer.addListener(value => obsrv.next(value));
                return () => clearInterval(producer.interval);
            });
            this.coldSubscription = coldObservable.subscribe(resp => console.log('Zähler Cold-Observable: ' + resp));

            // Hot Observable
            const hotObservable = Observable.create(obsrv => {
                this.producer.addListener(value => obsrv.next(value));
            });
            this.hotSubscription = hotObservable.subscribe(resp => console.log('Zähler Hot-Observable: ' + resp));

        }, 4000);

        // ----


        // Teil 3
        const passengersHttp = (searchTerm) => {
            return this.http.get('/wrong/passengers.json?name=' + searchTerm)
                .catch(err => this.http.get('/assets/passengers.json?name=' + searchTerm))
                // Simulation Backend
                .delay(2000)
                .map(resp => {
                    return resp.json().filter(passenger => {
                        const search = passenger.name.toLowerCase() + passenger.lastName.toLowerCase();
                        return search.indexOf(searchTerm.toLowerCase()) !== -1;
                    });
                });
            // ---
        };

        passengersHttp('dan').subscribe(resp => console.log(resp));

        this.inputSubject = new BehaviorSubject({target: {value: this.name}});
        this.listObservable = this.inputSubject
            .asObservable()
            .debounceTime(300)
            .map(event => event.target.value)
            .distinctUntilChanged()
            .do(() => this.loading = true)
            .switchMap(searchTerm => passengersHttp(searchTerm))
            .do(() => this.loading = false);
        // ----

    }

    ngOnDestroy() {
        // Teil 2
        this.timeSubscription.unsubscribe();
        clearTimeout(this.hotColdTimeout);
        if (this.hotSubscription) {
            this.hotSubscription.unsubscribe();
        }
        if (this.coldSubscription) {
            this.coldSubscription.unsubscribe();
        }
        clearInterval(this.producer.interval);
    }

}
