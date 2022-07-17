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
const chai_1 = require("chai");
(0, cucumber_1.Given)('user hits on the link {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
(0, cucumber_1.When)('user click on login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.css("button[type='submit']")).click();
}));
(0, cucumber_1.When)('user click on customers menu', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.css("a[href*='#'] i[class*='nav-icon far fa-user']")).click();
    yield protractor_1.browser.sleep(4000);
    yield (0, protractor_1.element)(protractor_1.by.css("a[href='/Admin/Customer/List'] i")).click();
}));
(0, cucumber_1.Then)('customes page appears', () => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(yield (0, protractor_1.element)(protractor_1.by.css(".float-left")).getText()).to.equal("Customers");
}));
(0, cucumber_1.When)('user enters email {string} and click on search button', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.id("SearchEmail")).sendKeys(string);
    yield (0, protractor_1.element)(protractor_1.by.id("search-customers")).click();
    yield protractor_1.browser.sleep(4000);
}));
(0, cucumber_1.When)('user enters first name {string} and click on search button', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.id("SearchFirstName")).sendKeys(string);
    yield (0, protractor_1.element)(protractor_1.by.id("search-customers")).click();
    yield protractor_1.browser.sleep(4000);
}));
(0, cucumber_1.Then)('search result should be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    let i = 0;
    yield protractor_1.element.all(protractor_1.by.css("#customers-grid_wrapper  .dataTables_scroll .dataTables_scrollBody table tbody tr")).each((row) => __awaiter(void 0, void 0, void 0, function* () {
        let eid = yield row.all(protractor_1.by.css("td")).get(1).getText();
        yield console.log(eid);
        if ((yield eid) == "james_pan@nopCommerce.com") {
            i++;
            yield console.log(yield row.all(protractor_1.by.css("td input")).get(0).isSelected());
            yield row.all(protractor_1.by.css("td input")).get(0).click();
            yield console.log(yield row.all(protractor_1.by.css("td input")).get(0).isSelected());
        }
    }));
    if (i < 1) {
        chai_1.expect.fail("Fail it as result not found %%%%%%%%%%%%%%%%%%%%%%%");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVndWRlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBkZWZpbmF0aW9uL21lZ3VkZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQWlEO0FBRWpELCtCQUF3QztBQUV4QyxJQUFBLGdCQUFLLEVBQUMsZ0NBQWdDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUN0RCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyw0QkFBNEIsRUFBRSxHQUFRLEVBQUU7SUFDNUMsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILElBQUEsZUFBSSxFQUFDLDhCQUE4QixFQUFFLEdBQVEsRUFBRTtJQUM5QyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25FLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyx1QkFBdUIsRUFBRSxHQUFRLEVBQUU7SUFDdEMsSUFBQSxhQUFNLEVBQUMsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENB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