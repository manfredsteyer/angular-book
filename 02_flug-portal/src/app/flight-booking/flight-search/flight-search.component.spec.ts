
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from '../flight-booking.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { BASE_URL } from '../../app.tokens';
import { FlightSearchComponent } from './flight-search.component';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { of } from 'rxjs/observable/of';
import { FlightService } from './flight.service';
describe('FlightSearchComponent', () => {

  /*
  let mock = {
    find(from: string, to: string): Observable<Flight[]> {
      return of(
              [
                {id: 17, from: 'Hamburg', to: 'Graz', date: '...', delayed: true},
                {id: 18, from: 'Hamburg', to: 'Graz', date: '...', delayed: true},
                {id: 19, from: 'Hamburg', to: 'Graz', date: '...', delayed: true}
              ]);
    }
  };
  */

  let mock = {
    flights: [],
    load(from: string, to: string): void {
      this.flights =
        [
          {id: 17, from: 'Hamburg', to: 'Graz', date: '...', delayed: true},
          {id: 18, from: 'Hamburg', to: 'Graz', date: '...', delayed: true},
          {id: 19, from: 'Hamburg', to: 'Graz', date: '...', delayed: true}
        ];
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FlightBookingModule,
        RouterTestingModule
      ],
      declarations: [
        // FlightCardComponent
      ],
      providers: [
        { provide: BASE_URL, useValue: '' }
      ]
    }).overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: mock }
        ]
      }
    }).compileComponents();
  }));

  afterEach(() => {
  });

  it('should have no flights initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    expect(comp.flights.length).toBe(0);
  });

  it('should load flights with from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    let svc = fixture.debugElement.injector.get(FlightService);
    spyOn(svc, 'load').and.callThrough();

    comp.from = 'Graz';
    comp.to = 'Hamburg';

    comp.search();

    expect(comp.flights.length).toBe(3);
    expect(svc.load).toHaveBeenCalled();



  });

  it('should not load flights w/o from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = '';

    comp.search();

    expect(comp.flights.length).toBe(0);

  });


})
