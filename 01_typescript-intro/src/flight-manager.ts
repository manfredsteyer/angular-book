import { Flight } from './flight';

export class FlightManager {

    private cache: Flight[];

    constructor(cache: Flight[]) {
        this.cache = cache;
    }

    search(from: string, to: string): Flight[] {
        let result = new Array<Flight>();
        for(let f of this.cache) {
            if (f.from == from && f.to == to) {
                result.push(f);
            }
        }
        return result;
    }

    search2(from: string, to: string): Flight[] {
        let result: Flight[] = this.cache.filter(function(f: Flight) {
            return f.from == from && f.to == to;
        });
        return result;
    }

    search3(from: string, to: string): Flight[] {
        return this.cache.filter(f => f.from == from && f.to == to);
    }

    searchFromWeb(
        from: string, 
        to: string, 
        success: (flights: Flight[]) => void, 
        failed: (err: string) => void
    ) {

        let xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.debug(xmlhttp.responseText);
                success(JSON.parse(xmlhttp.responseText));
                
            }
            else if (this.readyState == 4 && this.status >= 400) {
                console.error('Fehler beim Laden', this.responseText)
                failed(this.responseText);
            }
        };

        let url = `http://angular.atangular-akademie.com/api/flug?abflugort=${encodeURIComponent(from)}&zielort=${encodeURIComponent(to)}`;
        xmlhttp.open("GET", url);
        xmlhttp.send();
    }

    searchFromWebWithPromises(from: string, to: string): Promise<Flight[]> {
        
        return new Promise((resolve: Function, reject: Function) => {
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.debug(xmlhttp.responseText);
                    resolve(JSON.parse(xmlhttp.responseText));
                    
                }
                else if (xmlhttp.readyState == 4 && xmlhttp.status >= 400) {
                    console.error('Fehler beim Laden', xmlhttp.responseText)
                    reject(xmlhttp.responseText);
                }
                else if (this.readyState == 4) {
                    console.warn('Unerwartetes Ergebnis', xmlhttp.responseText);
                    reject(xmlhttp.responseText);
                }
            };
        
            var url = `http://angular.atangular-akademie.com/api/flight?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        });
    }      
     
}
