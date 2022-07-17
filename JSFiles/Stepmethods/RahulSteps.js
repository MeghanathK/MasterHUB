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
exports.RahulSteps = void 0;
const protractor_1 = require("protractor");
class RahulSteps {
    Navigation(link) {
        protractor_1.browser.get(link);
    }
    getName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, protractor_1.element)(protractor_1.by.css("div[class='form-group'] input[name='name']")).sendKeys(name);
        });
    }
    submitpass(word) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log(word);
            yield (0, protractor_1.element)(protractor_1.by.css("input[name='email']")).sendKeys(word);
            protractor_1.browser.sleep(10000);
        });
    }
}
exports.RahulSteps = RahulSteps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFodWxTdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBtZXRob2RzL1JhaHVsU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBQ2pELE1BQWEsVUFBVTtJQUV2QixVQUFVLENBQUUsSUFBVztRQUNuQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUssT0FBTyxDQUFDLElBQVc7O1lBQ3JCLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsSUFBVzs7WUFFeEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3ZCLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQUE7Q0FFQTtBQWpCRCxnQ0FpQkMifQ==