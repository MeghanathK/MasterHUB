import { element, by, ElementFinder } from 'protractor';


export class  PavanLogin{
    btlogin:ElementFinder =   element(by.css("button[type='submit']"));
    mnucustomer:ElementFinder =element(by.css("a[href*='#'] i[class*='nav-icon far fa-user']"));
    lkcustomer:ElementFinder=element(by.css("a[href='/Admin/Customer/List'] i"));
    txemail:ElementFinder=element(by.id("SearchEmail"));
    btSearch:ElementFinder= element(by.id("search-customers"));
    txfistName:ElementFinder = element(by.is("SearchFirstName"));


}