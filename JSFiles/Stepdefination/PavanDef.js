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
const PavanMeth_1 = require("../Stepmethods/PavanMeth");
const pm = new PavanMeth_1.PavanMeth();
(0, cucumber_1.Given)('user hits on the link {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    //pm.getLink(string);
    yield protractor_1.browser.get(string);
    yield protractor_1.browser.manage().window().maximize();
}));
(0, cucumber_1.When)('user click on login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pm.ckLogin();
}));
(0, cucumber_1.When)('user click on customers menu', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pm.ckCustomer();
}));
(0, cucumber_1.Then)('customes page appears', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pm.pgCustomer();
}));
(0, cucumber_1.When)('user enters email {string} and click on search button', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield pm.setEmail(string);
    yield pm.ckSerach();
}));
(0, cucumber_1.Then)('search result should be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield pm.Result();
}));
// When('user enters firstname {string} and click on search button', async (string)=> {
//     await pm.setName(string);
//     await pm.ckSerach();
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF2YW5EZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwZGVmaW5hdGlvbi9QYXZhbkRlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsd0RBQWlEO0FBRWpELE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO0FBQzFCLElBQUEsZ0JBQUssRUFBQyxnQ0FBZ0MsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBRXZELHFCQUFxQjtJQUNyQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUUzQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsSUFBQSxlQUFJLEVBQUMsNEJBQTRCLEVBQUUsR0FBUSxFQUFFO0lBQzdDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7SUFDNUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILElBQUEsZUFBSSxFQUFDLHVCQUF1QixFQUFFLEdBQVEsRUFBRTtJQUNyQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsdURBQXVELEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUMxRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLG1DQUFtQyxFQUFFLEdBQVEsRUFBRTtJQUNqRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsdUZBQXVGO0FBQ3ZGLGdDQUFnQztBQUNoQywyQkFBMkI7QUFDM0IsTUFBTSJ9