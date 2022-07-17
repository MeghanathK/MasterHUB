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
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
    }),
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../JSFiles/pavan.js'],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFpQzs7Ozs7Ozs7Ozs7O0FBRWpDLDJDQUE2QztBQUVsQyxRQUFBLE1BQU0sR0FBVztJQUN4QixhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFFRCw0Q0FBNEM7SUFDNUMsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLEdBQVEsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQTtJQUVILG1FQUFtRTtJQUNuRSx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFFOUIsbUNBQW1DO0lBQ25DLGVBQWUsRUFBRTtRQUNmLHNCQUFzQixFQUFFLEtBQUs7S0FDOUI7Q0FDRixDQUFDIn0=