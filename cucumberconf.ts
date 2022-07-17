// An example configuration file.

import {Config,browser} from 'protractor';

//import * as reporter from "cucumber-html-reporter";
 
var reporter = require('cucumber-html-reporter');

export let config: Config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
      'browserName': 'chrome',
      'shardTestFiles': true,
       'maxInstances': 1}//{
      //   'browserName': 'firefox',
      //   'shardTestFiles': true,
      //    'maxInstances': 2 }
      
     
   ],
  
    // Framework to use. Jasmine is recommended.
    framework: 'custom',

    onPrepare: async() => {
      browser.waitForAngularEnabled(false);
      },




    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../Features/megu.feature'],
    cucumberOpts: {
    // tags :"@smoke",
       format:"json:../Reports/Report.json",
      
        // require step definitions
        require: [
          './Stepdefination/*.js' // accepts a glob
        ]
      },
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './Reports/Report.json',
          output: './Reports/Report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
         
      };
  
      reporter.generate(options);

       },
      
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
 
  };
  