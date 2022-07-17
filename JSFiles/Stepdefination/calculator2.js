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
const Calculator_1 = require("../PageObject/Calculator");
const po = new Calculator_1.calcuator();
(0, cucumber_1.When)('user enters {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield po.txfirst.sendKeys(string);
    yield po.txsec.sendKeys(string2);
}));
(0, cucumber_1.Then)('sum should be displayed as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield po.btgo.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwZGVmaW5hdGlvbi9jYWxjdWxhdG9yMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUVoRCx5REFBaUQ7QUFFakQsTUFBTSxFQUFFLEdBQUUsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFFdkIsSUFBQSxlQUFJLEVBQUMsbUNBQW1DLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDbEUsb0VBQW9FO0lBQ3BFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMscUNBQXFDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUN6RCxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==