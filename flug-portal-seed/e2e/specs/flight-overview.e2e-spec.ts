import { browser, by, element } from 'protractor';

describe('Flight Overview', () => {
    it('should find a welcome message', () => {
        browser.get('http://localhost:4200');
        const expectedHeaderText = 'Willkommen!';

        // Suche mittels des TagNamens
        const elem = element(by.tagName('h1'));

        // Existiert das Element auch tatsächlich?
        expect(elem.isPresent()).toBe(true);

        // Methoden, wie getText, liefern ein Promise zurück
        elem.getText().then(function (text) {
            expect(text).toBe(expectedHeaderText);
        });

        // Automatisch Promises aufzulösen
        expect(elem.getText()).toBe(expectedHeaderText);
    });

});
