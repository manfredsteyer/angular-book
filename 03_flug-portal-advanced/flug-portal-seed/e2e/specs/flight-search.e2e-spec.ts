import { by } from '../lib/custom-locator';
import { browser, element } from 'protractor';

describe('Flight Search', () => {

    beforeEach(() => {
        browser.get('http://localhost:4200');
        element(by.e2eLocator('user')).sendKeys('max');
        element(by.e2eLocator('password')).sendKeys('geheim');
        element(by.e2eLocator('login')).click();
        element(by.e2eLocator('flug-buchen')).click();
    });

    it('should find flights between Hamburg and Graz and select on', () => {
        element(by.e2eLocator('search')).click();
        expect(element.all(by.tagName('flight-card')).count()).toBe(3);

        const flight = element(by.e2eLocator('flight-card-3'));

        browser.actions().mouseMove(flight.getWebElement()).perform();

        expect(flight.getAttribute('style')).toContain('lightgrey');
        flight.element(by.tagName('input')).click();
        expect(flight.getAttribute('style')).toContain('orange');
    });

    it('should disable search button if from and to location are the same', () => {

        expect(element(by.e2eLocator('search')).isEnabled()).toBe(true);

        element(by.e2eLocator('to')).clear();
        element(by.e2eLocator('to')).sendKeys('Hamburg');

        expect(element(by.e2eLocator('search')).isEnabled()).toBe(false);

    });
});
