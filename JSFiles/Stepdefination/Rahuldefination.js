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
const RahulSteps_1 = require("../Stepmethods/RahulSteps");
const RahulSteps2_1 = require("../Stepmethods/RahulSteps2");
const r1 = new RahulSteps_1.RahulSteps();
const r2 = new RahulSteps2_1.RahulSteps2();
(0, cucumber_1.Given)('user navigates to {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield r1.Navigation(string);
    });
});
(0, cucumber_1.When)('When step here user enters the {string} in the name filed', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield r1.getName(string);
    });
});
(0, cucumber_1.Then)('take the required text', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield r2.captureText();
    });
});
//   Then('Submit it in password section', function () {
//   r1.submitpass(r2.text);
//   browser.sleep(10000);
//   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFodWxkZWZpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcGRlZmluYXRpb24vUmFodWxkZWZpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBR3ZELDBEQUFvRDtBQUNwRCw0REFBcUQ7QUFFckQsTUFBTSxFQUFFLEdBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsTUFBTSxFQUFFLEdBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBQSxnQkFBSyxFQUFDLDRCQUE0QixFQUFFLFVBQWdCLE1BQU07O1FBQ3RELE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsSUFBQSxlQUFJLEVBQUMsMkRBQTJELEVBQUMsVUFBZ0IsTUFBTTs7UUFDdEYsTUFBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyx3QkFBd0IsRUFBRTs7UUFDOUIsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdMLHdEQUF3RDtBQUN4RCw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLFFBQVEifQ==