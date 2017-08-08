import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTripDirective } from './validation/roundtrip.validator';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { DateComponent } from './date/date.component';
import { AuthGuard } from './auth/auth.guard';
import { LeaveComponentGuard } from './deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading.strategy';
import { SimpleAuthService } from './auth/simple-auth.service';
import { AuthChildGuard } from './auth/auth.child.guard';
import { AuthLoadGuard } from './auth/auth.load.guard';
import { AuthService } from './auth/auth.service';
import { E2eLocatorDirective } from './e2e-locator/e2e-locator.directive';
import { AnimationDriver } from '@angular/animations/browser';
import { CustomAnimationDriverFactory } from './animation/custom-animation-driver';
import { TranslateModule } from '@ngx-translate/core';
import { FlightClickWithWarningDirective } from './warning/flight-click-with-warning.directive';
import { RepeateDirective } from './structural/repeate.directive';
import { UnlessDirective } from './structural/unless.directive';
import { TooltipDirective } from './structural/tooltip.directive';
import { TooltipComponent } from './structural/tooltip.component';
import { Tooltip2Directive } from './structural/tooltip2.directive';
import { AdvancedAuthService } from './auth/advanced-auth.service';
import { ValidationErrorsComponent } from './validation/validation-errors.component';
import { DateControlComponent } from './date/date.control';
import { DateValueAccessorDirective } from './date/date-value-accessor';



@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent,
        DateControlComponent,
        DateValueAccessorDirective,
        E2eLocatorDirective,
        FlightClickWithWarningDirective,
        RepeateDirective,
        UnlessDirective,
        TooltipDirective,
        TooltipComponent,
        Tooltip2Directive,
        ValidationErrorsComponent
    ],
    exports: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent,
        DateControlComponent,
        DateValueAccessorDirective,
        E2eLocatorDirective,
        TranslateModule,
        FlightClickWithWarningDirective,
        RepeateDirective,
        UnlessDirective,
        TooltipDirective,
        TooltipComponent,
        Tooltip2Directive,
        ValidationErrorsComponent
    ],
    entryComponents: [
        TooltipComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            providers: [
                {provide: AuthService, useClass: AdvancedAuthService},
                AuthGuard,
                AuthLoadGuard,
                AuthChildGuard,
                LeaveComponentGuard,
                CustomPreloadingStrategy,
                {provide: AnimationDriver, useFactory: CustomAnimationDriverFactory}
            ],
            ngModule: SharedModule
        };
    }
}
