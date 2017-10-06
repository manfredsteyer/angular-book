import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CityPipe} from "./pipes/city.pipe";
import {CityValidator} from "./validation/city.validator";
import {CityAsyncValidator} from "./validation/city.asyc-validator";
import {DateComponent} from "./controls/date.component";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        CityPipe, CityValidator, CityAsyncValidator, DateComponent
    ],
    providers: [
        // Derzeit nur lokale Provider
    ],
    exports: [
        CityPipe, CityValidator, CityAsyncValidator, DateComponent
    ]
})
export class SharedModule {
}