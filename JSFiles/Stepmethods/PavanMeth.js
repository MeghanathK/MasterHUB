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
exports.PavanMeth = void 0;
const chai_1 = require("chai");
const protractor_1 = require("protractor");
const PavanLogin_1 = require("../PageObject/PavanLogin");
const pl = new PavanLogin_1.PavanLogin();
class PavanMeth {
    getLink(link) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(link);
        });
    }
    ckLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pl.btlogin.click();
        });
    }
    ckCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pl.mnucustomer.click();
            protractor_1.browser.sleep(4000);
            yield pl.lkcustomer.click();
        });
    }
    pgCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, chai_1.expect)(yield (0, protractor_1.element)(protractor_1.by.css(".float-left")).getText()).to.equal("Customers");
        });
    }
    setEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pl.txemail.sendKeys(email);
        });
    }
    ckSerach() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pl.btSearch.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
    Result() {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            yield protractor_1.element.all(protractor_1.by.css("#customers-grid_wrapper  .dataTables_scroll .dataTables_scrollBody table tbody tr")).each((row) => __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.PavanMeth = PavanMeth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF2YW5NZXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcG1ldGhvZHMvUGF2YW5NZXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF3QztBQUN4QywyQ0FBaUQ7QUFDakQseURBQWtEO0FBQ2xELE1BQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLE1BQWEsU0FBUztJQUVoQixPQUFPLENBQUMsSUFBVzs7WUFDckIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixDQUFDO0tBQUE7SUFFSyxPQUFPOztZQUNiLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUNiLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFFWixJQUFBLGFBQU0sRUFBQyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxLQUFZOztZQUN2QixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDWixJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUZBQW1GLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLEdBQUcsRUFBQyxFQUFFO2dCQUM5SCxJQUFJLEdBQUcsR0FBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFHLENBQUEsTUFBTSxHQUFHLEtBQUUsMkJBQTJCLEVBQ3pDO29CQUNFLENBQUMsRUFBRSxDQUFDO29CQUNMLE1BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUN4RSxNQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbkQsTUFBTyxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQzlFO1lBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQTtZQUNGLElBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQztnQkFBQyxhQUFNLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7YUFBQztRQUc1RSxDQUFDO0tBQUE7Q0FNQTtBQXRERCw4QkFzREMifQ==