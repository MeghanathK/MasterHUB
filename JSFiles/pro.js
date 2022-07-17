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
const Credentials_1 = require("./Credentials");
let d = new Credentials_1.Credenitals();
describe('angularjs homepage', function () {
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/");
        yield (0, protractor_1.element)(protractor_1.by.css("div[class='form-group'] input[name='name']")).sendKeys((d.Owner.split(":"))[0]);
        yield (0, protractor_1.element)(protractor_1.by.css("input[name='email']")).sendKeys((d.Owner.split(":"))[1]);
        var flag = yield (0, protractor_1.element)(protractor_1.by.css("#exampleCheck1")).isEnabled();
        let dp = yield (0, protractor_1.element)(protractor_1.by.css('#exampleFormControlSelect1')).all(protractor_1.by.tagName("option"));
        let tec = yield dp[1].getText();
        console.log(tec);
        yield dp[1].click();
        protractor_1.browser.sleep(9000);
        var value1;
        let amz = yield protractor_1.element.all(protractor_1.by.css('#exampleFormControlSelect1 option'));
        //console.log(await amz[0].getText());
        for (var i = 0; i < amz.length; i++) {
            var geneder = yield amz[i].getText();
            yield console.log(geneder);
        }
        yield protractor_1.element.all(protractor_1.by.css('#exampleFormControlSelect1 option')).then(function (texts) {
            return __awaiter(this, void 0, void 0, function* () {
                var value = yield texts[1].getText();
                value1 = value;
                for (var i = 0; i < texts.length; i++) {
                    var geneder = yield texts[i].getText();
                    console.log(geneder);
                }
            });
        });
        console.log(value1);
        expect((0, protractor_1.element)(protractor_1.by.css("input[class='ng-untouched ng-pristine ng-valid']")).getText()).toBe("megahantaha");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9GO0FBQ3BGLCtDQUF5QztBQUV6QyxJQUFJLENBQUMsR0FBRSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUV6QixRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFN0IsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtRQUMxQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFL0QsSUFBSSxFQUFFLEdBQUUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUssTUFBTSxDQUFBO1FBRVosSUFBSSxHQUFHLEdBQUcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxzQ0FBc0M7UUFFdEMsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzdCO1lBQ0UsSUFBSyxPQUFPLEdBQUcsTUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBRUYsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBZSxLQUFLOztnQkFDbEYsSUFBSSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sR0FBQyxLQUFLLENBQUM7Z0JBQ2IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQy9CO29CQUNFLElBQUssT0FBTyxHQUFHLE1BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QjtZQUVILENBQUM7U0FBQSxDQUFDLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFJNUcsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILENBQUMsQ0FBQyxDQUFDIn0=