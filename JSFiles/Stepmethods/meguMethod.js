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
const meguObjects_1 = require("../PageObject/meguObjects");
const pl = new meguObjects_1.PavanLogin();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVndU1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBtZXRob2RzL21lZ3VNZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDJDQUFpRDtBQUNqRCwyREFBbUQ7QUFDbkQsTUFBTSxFQUFFLEdBQUcsSUFBSSx3QkFBVSxFQUFFLENBQUM7QUFDNUIsTUFBYSxTQUFTO0lBRWhCLE9BQU8sQ0FBQyxJQUFXOztZQUNyQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUM7S0FBQTtJQUVLLE9BQU87O1lBQ2IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUVLLFVBQVU7O1lBQ2IsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUVaLElBQUEsYUFBTSxFQUFDLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakYsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQVk7O1lBQ3ZCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNaLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sR0FBRyxFQUFDLEVBQUU7Z0JBQzlILElBQUksR0FBRyxHQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUcsQ0FBQSxNQUFNLEdBQUcsS0FBRSwyQkFBMkIsRUFDekM7b0JBQ0UsQ0FBQyxFQUFFLENBQUM7b0JBQ0wsTUFBTyxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ3hFLE1BQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNuRCxNQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDOUU7WUFFTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1lBQ0YsSUFBRyxDQUFDLEdBQUMsQ0FBQyxFQUFDO2dCQUFDLGFBQU0sQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQzthQUFDO1FBRzVFLENBQUM7S0FBQTtDQUlBO0FBcERELDhCQW9EQyJ9