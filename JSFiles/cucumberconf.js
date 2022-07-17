"use strict";
// An example configuration file.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
//import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
            'browserName': 'chrome',
            'shardTestFiles': true,
            'maxInstances': 1
        } //{
        //   'browserName': 'firefox',
        //   'shardTestFiles': true,
        //    'maxInstances': 2 }
    ],
    // Framework to use. Jasmine is recommended.
    framework: 'custom',
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
    }),
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../Features/megu.feature'],
    cucumberOpts: {
        // tags :"@smoke",
        format: "json:../Reports/Report.json",
        // require step definitions
        require: [
            './Stepdefination/*.js' // accepts a glob
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './Reports/Report.json',
            output: './Reports/Report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQ0FBaUM7Ozs7Ozs7Ozs7OztBQUVqQywyQ0FBMEM7QUFFMUMscURBQXFEO0FBRXJELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRXRDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBRW5CLHVEQUF1RDtJQUN2RCxpQkFBaUIsRUFBRSxDQUFDO1lBQ2xCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLGdCQUFnQixFQUFFLElBQUk7WUFDckIsY0FBYyxFQUFFLENBQUM7U0FBQyxDQUFBLEdBQUc7UUFDdEIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1Qix5QkFBeUI7S0FHM0I7SUFFQSw0Q0FBNEM7SUFDNUMsU0FBUyxFQUFFLFFBQVE7SUFFbkIsU0FBUyxFQUFFLEdBQVEsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQTtJQUtILGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELG1FQUFtRTtJQUNuRSx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ2Qsa0JBQWtCO1FBQ2YsTUFBTSxFQUFDLDZCQUE2QjtRQUVuQywyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsdUJBQXVCLENBQUMsaUJBQWlCO1NBQzFDO0tBQ0Y7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0Isc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUVGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFHSixtQ0FBbUM7SUFDbkMsZUFBZSxFQUFFO1FBQ2Ysc0JBQXNCLEVBQUUsS0FBSztLQUM5QjtDQUVGLENBQUMifQ==