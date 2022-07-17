"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PavanLogin = void 0;
const protractor_1 = require("protractor");
class PavanLogin {
    constructor() {
        this.btlogin = (0, protractor_1.element)(protractor_1.by.css("button[type='submit']"));
        this.mnucustomer = (0, protractor_1.element)(protractor_1.by.css("a[href*='#'] i[class*='nav-icon far fa-user']"));
        this.lkcustomer = (0, protractor_1.element)(protractor_1.by.css("a[href='/Admin/Customer/List'] i"));
        this.txemail = (0, protractor_1.element)(protractor_1.by.id("SearchEmail"));
        this.btSearch = (0, protractor_1.element)(protractor_1.by.id("search-customers"));
        this.txfistName = (0, protractor_1.element)(protractor_1.by.is("SearchFirstName"));
    }
}
exports.PavanLogin = PavanLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF2YW5Mb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3QvUGF2YW5Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFHeEQsTUFBYyxVQUFVO0lBQXhCO1FBQ0ksWUFBTyxHQUFtQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsZ0JBQVcsR0FBZ0IsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLGVBQVUsR0FBZSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsWUFBTyxHQUFlLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUFnQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsZUFBVSxHQUFpQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFHakUsQ0FBQztDQUFBO0FBVEQsZ0NBU0MifQ==