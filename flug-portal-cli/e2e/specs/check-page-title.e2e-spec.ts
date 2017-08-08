import { browser } from 'protractor';

describe('Page Title E2E Test', () => {

    beforeEach(() => {
        browser.get('http://localhost:4200');
    });

    it('should verify the page title', () => {

        const pageTitle = browser.getTitle();
        expect(pageTitle).toEqual('Flug Portal');

    });

    it('should verify the page title manually', (done) => {

        // Manuelle Auflösung der Promise
        browser.getTitle()
            .then(function (pageTitle) {
                expect(pageTitle).toEqual('Flug Portal');
                done();
            });

    });

});
