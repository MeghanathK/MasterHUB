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
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://naveenautomationlabs.com/opencart/");
        yield (0, protractor_1.element)(protractor_1.by.css("input[placeholder='Search']")).sendKeys("mobile");
        yield (0, protractor_1.element)(protractor_1.by.css("button[class='btn btn-default btn-lg']")).click();
        yield protractor_1.element.all(protractor_1.by.css("select[name$='category_id'] option")).each(function (dps) {
            return __awaiter(this, void 0, void 0, function* () {
                if ((yield dps.getText()) == "            test 1") {
                    yield dps.click();
                }
                else {
                    console.log("fail");
                }
            });
        });
        //mouse hover
        //await browser.actions().mouseMove(element(by.linkText("Components"))).mouseMove(await element(by.cssContainingText("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li","Web Cameras (0)"))).click().perform();
        //await browser.actions().mouseMove(element(by.linkText("Components"))).mouseMove(element(by.css("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li:nth-child(3"))).click().perform();
        yield protractor_1.browser.sleep(9000);
        yield (0, protractor_1.element)(protractor_1.by.linkText("Components")).click();
        let comp = yield (0, protractor_1.element)(protractor_1.by.cssContainingText("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li", "Web Cameras (0)")).getText();
        console.log(comp);
        //left panel displayed
        //expect(element(by.css("#column-left")).isDisplayed()).toBe(true);
        //handleing multiselect dropdown and knowing how many are selected and deseecting all
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2ZWVubGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vTmF2ZWVubGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBQ2pELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUUzQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO1FBQzNDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBZSxHQUFHOztnQkFFcEYsSUFBRyxDQUFBLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFFLG9CQUFvQixFQUM1QztvQkFDRSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFFbkI7cUJBQ0c7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7WUFFSixDQUFDO1NBQUEsQ0FBQyxDQUFBO1FBRUYsYUFBYTtRQUViLHVOQUF1TjtRQUN2Tiw2TEFBNkw7UUFDN0wsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDBEQUEwRCxFQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2Isc0JBQXNCO1FBRXRCLG1FQUFtRTtRQUNwRSxxRkFBcUY7SUFJckYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=