import { Routes, RouterModule } from '@angular/router'
import {BoardingComponent} from "./boarding.component";

const ROUTE_CONFIG: Routes = [
    {
        path: 'boarding',
        component: BoardingComponent
    }
];

export let BoardingRoutesModule = RouterModule.forChild(ROUTE_CONFIG);
