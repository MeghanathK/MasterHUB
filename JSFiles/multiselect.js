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
    // var originalTimeout;
    // beforeEach(function() {
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    // });
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://naveenautomationlabs.com/opencart/");
        var a = ["MacBook", "iPhone"];
        let items = yield protractor_1.element.all(protractor_1.by.css("div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12'] div div h4 a"));
        for (var i = 0; i < items.length; i++) {
            let item = yield items[i].getText();
            if (a.includes(item)) {
                let cl = yield protractor_1.element.all(protractor_1.by.xpath("(//div[@class='product-thumb transition'])/div[3]/button[1]")).get(i).click();
                //await cl[i].click();
                protractor_1.browser.sleep(3000);
            }
        }
        //await element(by.xpath("(//div[@class='product-thumb transition'])/div[3]/button[1]"));
        protractor_1.browser.sleep(9000);
        //cart total
        let ctv = yield (yield ((0, protractor_1.element)(protractor_1.by.css("#cart-total")).getText())).split("$");
        yield (0, protractor_1.element)(protractor_1.by.css("#cart-total")).click();
        let sum = yield ctv[1];
        console.log(sum + "********************************************************************");
        yield (0, protractor_1.element)(protractor_1.by.partialLinkText("View Cart")).click();
        let tot = yield (yield (0, protractor_1.element)(protractor_1.by.css(".col-sm-4.col-sm-offset-8 .table.table-bordered tbody tr:nth-child(4) td:nth-child(2)")).getText()).split("$");
        let total = yield tot[1];
        expect(total).toBe(sum);
        yield protractor_1.element.all(protractor_1.by.css("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/account']")).get(1).click();
        var EC = protractor_1.protractor.ExpectedConditions;
        // await browser.wait(EC.titleIs("Account Login"),8000);
        //check for wait and fix this issue
        yield protractor_1.browser.sleep(4000);
        console.log(yield protractor_1.browser.getTitle());
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tdWx0aXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RDtBQUM3RCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwREFBMEQ7SUFDMUQsa0RBQWtEO0lBQ2xELE1BQU07SUFFTixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO1FBQzNDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBQyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLEtBQUssR0FBRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0VBQStFLENBQUMsQ0FBQyxDQUFDO1FBQ25ILEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMvQjtZQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDbkI7Z0JBQ0ksSUFBSSxFQUFFLEdBQUcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25ILHNCQUFzQjtnQkFDdEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7U0FDSjtRQUNELHlGQUF5RjtRQUMvRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixZQUFZO1FBRWQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLHNFQUFzRSxDQUFDLENBQUM7UUFDdEYsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVGQUF1RixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2SixJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9ILElBQUksRUFBRSxHQUFFLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDdkMsd0RBQXdEO1FBRXhELG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFPbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=