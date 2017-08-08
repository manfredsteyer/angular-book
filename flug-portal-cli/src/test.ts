import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Typ Definition für globale Variablen
declare var __karma__: any;
declare var require: any;

// Verhindern das Karma zu früh startet
__karma__.loaded = function () {
};

// Initalisierung der Angular Testumgebung
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Imporierung aller Test Spezifikationen über Webpack require.context
const context = require.context('./', true, /\.spec\.ts$/);

// Alle TypeScript Dateien in Coverage Report einbinden
// const context = require.context('./app', true, /\.ts$/);

context.keys().map(context);

// Karma starten
__karma__.start();
