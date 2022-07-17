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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVndU9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0L21lZ3VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUd4RCxNQUFjLFVBQVU7SUFBeEI7UUFDSSxZQUFPLEdBQW1CLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNuRSxnQkFBVyxHQUFnQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDNUYsZUFBVSxHQUFlLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxZQUFPLEdBQWUsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRCxhQUFRLEdBQWdCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMzRCxlQUFVLEdBQWlCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUdqRSxDQUFDO0NBQUE7QUFURCxnQ0FTQyJ9