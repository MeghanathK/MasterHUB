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
const protractor_1 = require("protractor");
describe('angularjs homepage', function () {
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(" https://opensource-demo.orangehrmlive.com/");
        //let parent = await browser.getWindowHandle();
        yield protractor_1.element.all(protractor_1.by.css("#social-icons a")).each(function (link) {
            return __awaiter(this, void 0, void 0, function* () {
                yield link.click();
            });
        });
        let Windows = yield protractor_1.browser.getAllWindowHandles();
        //let parent = await browser.getWindowHandle();
        for (let i = 0; i < Windows.length; i++) {
            yield protractor_1.browser.switchTo().window(Windows[i]);
            if (yield ((yield protractor_1.browser.getTitle()) == "OrangeHRM Inc - YouTube")) {
                console.log(yield protractor_1.browser.getTitle());
                break;
            }
        }
        let parent = yield protractor_1.browser.getWindowHandle();
        yield protractor_1.browser.switchTo().window(parent);
        console.log(yield protractor_1.browser.getTitle());
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93SGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2luZG93SGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBQzdELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUMzQixJQUFJLGVBQWUsQ0FBQztJQUNwQixVQUFVLENBQUM7UUFDUCxlQUFlLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ25ELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO1FBQzNDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUNsRSwrQ0FBK0M7UUFDL0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBZSxJQUFJOztnQkFDakUsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsQ0FBQztTQUFBLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2xELCtDQUErQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDakM7WUFDRSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksTUFBTSxDQUFDLENBQUEsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxLQUFFLHlCQUF5QixDQUFDLEVBQy9EO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU07YUFDUDtTQUNGO1FBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQU0zQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBR0YsQ0FBQyxDQUFDLENBQUEifQ==