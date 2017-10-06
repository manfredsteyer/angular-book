import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuchungsStatusColorPipe} from "./buchungs-status-color.pipe";
import {BuchungsStatusPipe} from "./buchungs-status.pipe";
import {BoardingComponent} from "./boarding.component";
import {BoardingRoutesModule} from "./boarding.routes";

@NgModule({
    imports: [
        CommonModule, BoardingRoutesModule
    ],
    declarations: [
        BoardingComponent, BuchungsStatusPipe, BuchungsStatusColorPipe
    ],
    exports: [
        BuchungsStatusPipe, BuchungsStatusColorPipe
    ]
})
export class BoardingModule {

}