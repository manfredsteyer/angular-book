import{ Injectable } from '@angular/core'
import{ CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {FlightEditComponent} from "./flight-edit.component";

@Injectable()
export class FlightEditGuard implements CanDeactivate<FlightEditComponent> {
    canDeactivate(component: FlightEditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

         return component.canDeactivate();

    }

}