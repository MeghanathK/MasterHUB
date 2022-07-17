"use strict";
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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@smoke and @feature2" }, function () {
    // This hook will be executed before all scenarios
    protractor_1.browser.driver.manage().window().maximize();
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            var screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "impage/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwZGVmaW5hdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUEyRDtBQUUzRCwyQ0FBOEM7QUFHOUMsSUFBQSxpQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLEVBQUM7SUFDakMsa0RBQWtEO0lBQ2xELG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRTlDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxnQkFBSyxFQUFDLFVBQWdCLFFBQVE7O1FBQzFCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQzFDO1lBQ0MsSUFBSSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JDO0lBR0wsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9