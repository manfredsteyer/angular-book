# Beispiele zum Angular-Buch bei O'Reilly

Beispiel             | Kapitel
---------------------|------------------
01_typescript-into   | Einführende Beispiele aus TypeScript-Kapitel.
02_flug-portal		 | Angular Fallbeispiel aus Kapitel 2 bis 7 inkl. Basics zu Routing und Template-driven Forms (Kapitel 8 und 9). Aktualisiert für Angular 5 und den neuen HttpClient (siehe unten). Nutzen Sie dieses Beispiel beim Bearbeiten dieser Kapitel. Falls Sie die Entstehung dieses Beispiels über die Kapitel hinweg nachvollziehen wollen, finden Sie die einzelnen [Commits hier](https://github.com/manfredsteyer/2017_12_13/commits/master).
02_flug-portal-advanced | Das vollständige Fallbeispiel inkl. restlicher/ erweiterter Themen. Steht als Angular-CLI-Projekt und als rein webpack-basiertes Projekt (siehe Kapitel 18) zur Verfügung.
03_ngrx-4-sample		 | Beispiel für Redux (@ngrx/store) Kapitel.


## Vorbedingungen

- NodeJS in aktueller LTS-Version 

## Abhängigkeiten installieren

Wechseln Sie in das jeweilige Projektverzeichnis (Verzeichnis mit ``package.json``) und verwenden Sie die folgende Anweisung:

```
	npm install
```

## Beispiel starten

```
	npm start
```

Danach findet man die Anwendung unter ``http://localhost:8081``.

## Neuer HttpClient

Seit Angular 4.3 gibt es einen neuen ``HttpClient``, der spätestens mit Angular 5 den alten ``Http``-Service ersetzt. Der Zugriff auf die Flug-API des Buchbeispiels gestaltet sich damit so:

```TypeScript
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  search(): void {

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
                      .set('from', this.from)
                      .set('to', this.to);

    let headers = new HttpHeaders()
                      .set('Accept', 'application/json');

    this.httpClient.get<Flight[]>(url, { params, headers }).subscribe(
      (flights) => { this.flights = flights; },
      (err) => { console.error('Error loading flights', err); }
    );
  }
}
```

Wie man hier sieht, gibt es auf den ersten Blick wenig Unterschiede zum alten ``Http``-Service. Lediglich die Typen und Pakete sind andere (``HttpClient``, ``HttpHeaders``, ``HttpParams`` aus ``@angular/common/http``) und die gelieferten Daten werden automatisch mit dem JSON-Parser in JavaScript-Objekte übergeführt. Der Aufruf von ``.map(resp => resp.json)`` entfällt somit. 

Interessant ist auch, dass die ``set``-Methoden jeweils ein neues Objekt liefern anstatt das bestehende zu ändern. Deswegen sind diese aneinander zu ketten (z. B. ``new HttpParams().set('from', this.from).set('to', this.to);``).

Daneben bietet der neue HttpClient eine große Anzahl an [zusätzlichen Möglichkeiten](https://angular.io/guide/http), die [hier](https://angular.io/guide/http) nachgelesen werden können.





## Weitere Infos und Schulungen

http://www.softwarearchitekt.at

## Zusatzkapitel

http://www.angular.at/



