import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

