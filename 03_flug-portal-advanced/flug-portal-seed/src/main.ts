import { LOCALE_ID, TRANSLATIONS_FORMAT, TRANSLATIONS, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (ENV === 'prod') {
    enableProdMode();
}

const options: any = {
    providers: [
        {provide: TRANSLATIONS, useValue: require('./locale/messages.de.xlf')},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {provide: LOCALE_ID, useValue: 'de'}
    ]
};

platformBrowserDynamic()
    .bootstrapModule(AppModule, options)
    .catch(err => console.error(err));
