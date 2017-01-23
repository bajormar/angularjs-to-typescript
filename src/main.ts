/// <reference path="./../declarations.d.ts" />

import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';
import { AppModule } from './app';

if (ENV === 'production') {
    enableProdMode();
}


platformBrowserDynamic().bootstrapModule( AppModule );
