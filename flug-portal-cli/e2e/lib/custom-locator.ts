import { by as orgBy } from 'protractor';
import { ProtractorBy } from 'protractor/built/locators';

orgBy.addLocator('e2eLocator', (value, parentElement) => {

    // HTML Element in dem gesucht werden soll
    const using: HTMLElement = parentElement || document;

    // Suche nach Attribute flightE2eLocator mit übergebenen Wert
    return using.querySelectorAll(`[flightE2eLocator="${value}"]`);

});

interface ProtractorByWithE2eLocator extends ProtractorBy {
    e2eLocator?(value, parentElement?);
}
export let by: ProtractorByWithE2eLocator = orgBy;
