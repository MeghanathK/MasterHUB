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
describe('angularjs homepage', function () {
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://demo.opencart.com/admin/index.php?route=catalog/category&user_token=5168b78aa9162fbece70e8f7bea53258");
        yield (0, protractor_1.element)(protractor_1.by.css("input[name='username']")).sendKeys("demo");
        yield (0, protractor_1.element)(protractor_1.by.css("input[name='password']")).sendKeys("demo");
        yield (0, protractor_1.element)(protractor_1.by.css("button[type='submit']")).click();
        yield protractor_1.browser.sleep(6000);
        var k = 0;
        var a = "Tablets";
        for (let j = 2; j <= 5; j++) {
            let columns = yield protractor_1.element.all(protractor_1.by.css(".table-responsive table tbody tr td:nth-child(2)"));
            for (let i = 0; i < columns.length; i++) {
                let row = yield columns[i].getText();
                if (row == a) {
                    yield protractor_1.element.all(protractor_1.by.css(".table-responsive table tbody tr")).get(i).all(protractor_1.by.css("td")).get(0).click();
                    yield protractor_1.browser.sleep(9000);
                    k++;
                }
                //    else{
                //        await element(by.cssContainingText(".page-link",String(j))).click();
                //    }
            }
            if (k = 4) {
                break;
            }
            else {
                yield protractor_1.browser.sleep(9000);
                yield protractor_1.element.all(protractor_1.by.css("li[class='page-item'] a")).each(function (btn) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let button = Number(yield btn.getText());
                        if (button == j) {
                            console.log(button + "1111111111111111111111111111111111111111111111111111111111111");
                            console.log(yield btn.isEnabled());
                            // await element.all(by.css("a[href*='page="+j+"']")).first().click();
                            yield protractor_1.browser.actions().mouseMove(yield btn.element(protractor_1.by.xpath("parent::li"))).click().perform();
                        }
                    });
                });
                yield protractor_1.browser.sleep(9000);
            }
        }
        if (k < 4) {
            expect("something").toBe("something else");
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFDN0QsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLElBQUksZUFBZSxDQUFDO0lBQ3BCLFVBQVUsQ0FBQztRQUNQLGVBQWUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDbkQsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFRLEVBQUU7UUFFaEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw4R0FBOEcsQ0FBQyxDQUFDO1FBQ2hJLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsR0FBQyxTQUFTLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFDckI7WUFFRyxJQUFJLE9BQU8sR0FBRyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO1lBQzVGLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNqQztnQkFDRyxJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxHQUFHLElBQUUsQ0FBQyxFQUNWO29CQUNJLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0RyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixDQUFDLEVBQUUsQ0FBQztpQkFFUDtnQkFDSixXQUFXO2dCQUNYLDhFQUE4RTtnQkFDOUUsT0FBTzthQUVOO1lBQ0YsSUFBRyxDQUFDLEdBQUMsQ0FBQyxFQUNOO2dCQUNDLE1BQU07YUFDTjtpQkFBSTtnQkFFSixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFlLEdBQUc7O3dCQUV6RSxJQUFJLE1BQU0sR0FBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFFeEMsSUFBRyxNQUFNLElBQUUsQ0FBQyxFQUNaOzRCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLCtEQUErRCxDQUFDLENBQUM7NEJBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTs0QkFDbkMsc0VBQXNFOzRCQUNyRSxNQUFPLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt5QkFDL0Y7b0JBQ0osQ0FBQztpQkFBQSxDQUFDLENBQUE7Z0JBQ04sTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtTQVFDO1FBQ0QsSUFBRyxDQUFDLEdBQUMsQ0FBQyxFQUNOO1lBQ0csTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzdDO0lBSUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVDLENBQUMsQ0FBQyxDQUFBIn0=