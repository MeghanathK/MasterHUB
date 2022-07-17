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
        /* await  browser.get("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        let source = await element(by.css("#box6"));
         let drop = await element(by.css("#box106"));
         let drop2 = await element(by.css("div[id='mainContainer'] h2"));
         let drop3 = await browser.driver.findElement(by.css("div[id='mainContainer'] h2"));
         //#box107
        await browser.actions().mouseDown(source).mouseMove(drop).mouseUp().perform();
         //browser.sleep(9000);
         //await console.log( await drop2.getLocation());
        // await console.log( await drop3.getLocation());
         //await browser.actions().mouseMove({x: 100, y: 0}).sendKeys(protractor.Key.RIGHT,protractor.Key.ENTER).perform();
         
         
         await browser.actions().click(await drop2,protractor.Button.RIGHT).perform();
         browser.sleep(9000);*/
        yield protractor_1.browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        let ele = yield (0, protractor_1.element)(protractor_1.by.css(".context-menu-one.btn.btn-neutral"));
        yield protractor_1.browser.actions().click(yield ele, protractor_1.protractor.Button.RIGHT).perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        console.log(yield protractor_1.browser.switchTo().alert().getText());
        protractor_1.browser.sleep(9000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ05kcm9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZHJhZ05kcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThEO0FBQzlELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUUzQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO1FBQzVDOzs7Ozs7Ozs7Ozs7OzsrQkFjdUI7UUFFdEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQzVFLElBQUksR0FBRyxHQUFHLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHeEUsTUFBTyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2RSxNQUFPLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hFLE1BQU8sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEUsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRXhELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBS3JCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9