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
const calculatormeth_1 = require("../Stepmethods/calculatormeth");
const Calculator_1 = require("../PageObject/Calculator");
const chai = require('chai');
var expect = chai.expect;
var assert = chai.asset;
const po = new Calculator_1.calcuator();
const cal = new calculatormeth_1.calmethods();
(0, cucumber_1.Given)('user navigated to {string}', (stringa) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    //await browser.get(stringa);
    yield cal.geturl(stringa);
}));
(0, cucumber_1.When)('user enters {int} and {int}', (int1, int2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield po.txfirst.sendKeys(int1);
    yield po.txsec.sendKeys(int2);
    // await cal.getnumbers(int1,int2);
}));
(0, cucumber_1.When)('clicked on go button', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield (0, protractor_1.element)(protractor_1.by.id("gobutton")).click();
}));
(0, cucumber_1.Then)('sum should be displayed as {int}', (int) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield console.log("given number validate " + int);
    yield expect.fail("faiiling test-*******************");
    yield protractor_1.browser.sleep(6000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcGRlZmluYXRpb24vY2FsY3VsYXRvcnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFpRDtBQUNqRCxrRUFBeUQ7QUFDekQseURBQWlEO0FBRWpELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsTUFBTSxFQUFFLEdBQUUsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSwyQkFBVSxFQUFFLENBQUM7QUFDN0IsSUFBQSxnQkFBSyxFQUFDLDRCQUE0QixFQUFFLENBQU8sT0FBTyxFQUFDLEVBQUU7SUFDakQsb0VBQW9FO0lBQ3BFLDZCQUE2QjtJQUM3QixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUtILElBQUEsZUFBSSxFQUFDLDZCQUE2QixFQUFFLENBQU0sSUFBSSxFQUFFLElBQUksRUFBQyxFQUFFO0lBQ3JELG9FQUFvRTtJQUNuRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsbUNBQW1DO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxJQUFBLGVBQUksRUFBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFDckMsb0VBQW9FO0lBQ3JFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsSUFBQSxlQUFJLEVBQUMsa0NBQWtDLEVBQUUsQ0FBTyxHQUFHLEVBQUMsRUFBRTtJQUNwRCxvRUFBb0U7SUFDckUsTUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpELE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9