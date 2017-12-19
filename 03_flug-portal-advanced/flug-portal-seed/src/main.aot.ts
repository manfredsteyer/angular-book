import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../out-tsc/aot/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
