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
exports.calmethods = void 0;
const protractor_1 = require("protractor");
const Calculator_1 = require("../PageObject/Calculator");
var chai = require('chai');
const po = new Calculator_1.calcuator();
class calmethods {
    geturl(link) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(link);
        });
    }
    getnumbers(first, sec) {
        return __awaiter(this, void 0, void 0, function* () {
            // await element(by.model("first")).sendKeys(first);
            yield po.txfirst.sendKeys(first);
            //await element(by.model("second")).sendKeys(sec);
            yield po.txsec.sendKeys(sec);
        });
    }
}
exports.calmethods = calmethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcm1ldGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwbWV0aG9kcy9jYWxjdWxhdG9ybWV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQseURBQWlEO0FBQ2pELElBQUksSUFBSSxHQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUxQixNQUFNLEVBQUUsR0FBRSxJQUFJLHNCQUFTLEVBQUUsQ0FBQztBQUV6QixNQUFhLFVBQVU7SUFHZCxNQUFNLENBQUMsSUFBVzs7WUFFcEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFDSyxVQUFVLENBQUMsS0FBWSxFQUFDLEdBQVU7O1lBRXRDLG9EQUFvRDtZQUNwRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLGtEQUFrRDtZQUNsRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtDQUNKO0FBZEQsZ0NBY0MifQ==