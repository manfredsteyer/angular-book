import { browser, by, element } from 'protractor';

describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should load page and read title', function() {

        // let link = element(by.linkText("Flight Booking"));
        // link.click();

        let vonFilter = element(by.name("from"));
        let nachFilter = element(by.name("to"));
        let suchen = element(by.css("button")); // <input type="button"
                                                // <button>

        vonFilter.clear();
        nachFilter.clear();

        vonFilter.sendKeys("Hamburg");
        nachFilter.sendKeys("Graz");

        suchen.click();

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });

        let cards = element.all(by.tagName("flight-card"));
        let first = cards.first();
        let h2 = first.element(by.tagName('h2'));

        expect(cards.count()).toBe(3);
        expect(h2.getText()).toMatch(/Hamburg/);
    });

    function writeScreenShot(data, filename) {

        let fs = require("fs");

        let stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
});


