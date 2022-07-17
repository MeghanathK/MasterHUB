// An example configuration file.

import { Config, browser } from 'protractor';

export let config: Config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    onPrepare: async() => {
      browser.waitForAngularEnabled(false);
      },
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../JSFiles/pavan.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };
  