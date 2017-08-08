const {SpecReporter} = require('jasmine-spec-reporter');

// Protractor Konfiguration
exports.config = {
    onPrepare: function () {

        // Integration von jasmine-spec-reporter
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));

        // Eigener Reporter welcher im Fehlerfall einen Screenshot erstellt
        const fs = require('fs');
        const mkdirp = require('mkdirp');
        jasmine.getEnv().addReporter(new function () {
            this.specDone = function (result) {
                if (result.failedExpectations.length > 0) {
                    browser.takeScreenshot().then(png => {
                        mkdirp('screenshots', err => {
                            if (err) {
                                console.error(err);
                            } else {
                                let stream = fs.createWriteStream(
                                    'screenshots/' +
                                    result.description.replace(/[\|&;\$%@"<>\(\)\+,\/]/g, "") + '.png'
                                );
                                stream.write(new Buffer(png, 'base64'));
                                stream.end();
                            }
                        });
                    });
                }
            };
        });


        // Einstellung der Browser Auflösung
        browser.driver.manage().window().setSize(1280, 1024);
    },

    directConnect: true,

    // allScriptsTimeout: 11000,

    // capabilities: {
    //     'browserName': 'chrome'
    // },

    // Alternative für mehrere Browser
    //multiCapabilities:[
    //  {
    //    'browserName' : 'safari'
    //  },
    //  {
    //    'browserName' : 'firefox'
    //  },
    //  {
    //    'browserName' : 'chrome'
    //  }
    //],

    specs: ['e2e/specs/*.e2e-spec.ts'],
    // suites: {
    //     home: [
    //         'e2e/specs/check-page-title.e2e-spec.ts',
    //         'e2e/specs/flight-overview.e2e-spec.ts'
    //     ],
    //     search: 'e2e/specs/flight-search.e2e-spec.ts'
    // },

    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function () {
        }
    },

    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
    }
};
