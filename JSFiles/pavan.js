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
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://admin-demo.nopcommerce.com/Admin");
        yield protractor_1.browser.manage().window().maximize();
        //await element(by.id("Email")).sendKeys("admin@yourstore.com");
        // await element(by.id("Password")).sendKeys("admin");
        yield (0, protractor_1.element)(protractor_1.by.css("button[type='submit']")).click();
    }));
    // it("search functionality",async ()=>{
    //     await element(by.css("input[placeholder='Search']")).sendKeys("sy");
    //    let dpvalues = await element.all(by.css("#user-selection h5"));
    //    for (let i=0;i<dpvalues.length;i++){
    //     console.log( await dpvalues[i].getText());
    //     let req =await dpvalues[i].getText();
    //     if (await req.includes("SYSTEM INFORMATION")){
    //         await dpvalues[i].click();
    //         break;
    //     }}
    //})
    /*it("search functionality",async ()=>{
        await element(by.css("a[href*='#'] i[class*='nav-icon far fa-user']")).click();
        browser.sleep(3000);
        await element(by.css("a[href='/Admin/Customer/List'] i")).click();
       // await element(by.id("SearchMonthOfBirth")).all(by.cssContainingText("option","12")).click();
        await element(by.css("div[role='listbox']")).click();
    //     let val=["Administrators","Forum Moderators","Registered"];
    //    await element.all(by.css("ul[id='SelectedCustomerRoleIds_listbox'] li")).each(async (item)=>{

    //     if (await val.includes(await item.getText()))
    //     {
    //        item.click();
    //     }
    //    });

       await element(by.id("search-customers")).click();
       console.log(await element(by.css("div[role='listbox']")).getText());
     browser.sleep(10000);
       let rows = await element.all(by.css("tbody tr"));
       let cols = await element.all(by.css("tbody tr td"));
     console.log(rows.length +"***"+cols.length)
       for(let i=1;i<=rows.length;i++)
       {
      
          //  let content = await element.all(by.css("tbody tr")).get(i).all(by.css("td")).get(2);
          let content = await element(by.css("tbody tr:nth-child("+i+") td:nth-child(3)"));
          browser.sleep(10000);
            if(await content.getText()=="Steve Gates")
            {
                await element(by.css("tbody tr:nth-child("+i+") td:nth-child(1)")).click();
                browser.sleep(5000);
            }
        }

       

       
      



    })*/
    it("new testing ", () => __awaiter(this, void 0, void 0, function* () {
        yield (0, protractor_1.element)(protractor_1.by.css("a[href*='#'] i[class*='nav-icon far fa-user']")).click();
        protractor_1.browser.sleep(3000);
        yield (0, protractor_1.element)(protractor_1.by.css("a[href='/Admin/CustomerRole/List'] i")).click();
        yield (0, protractor_1.element)(protractor_1.by.css(".btn.btn-primary")).click();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.refresh();
        yield (0, protractor_1.element)(protractor_1.by.xpath("//button[normalize-space()='Choose a product']")).click();
        let windows = yield protractor_1.browser.getAllWindowHandles();
        yield protractor_1.browser.switchTo().window(windows[1]);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(4000);
        let tbrows = yield protractor_1.element.all(protractor_1.by.css("div[class='dataTables_scrollBody'] table tbody tr"));
        let tbcols = yield protractor_1.element.all(protractor_1.by.css("table tbody tr:nth-child(1) td"));
        yield console.log((yield tbrows.length) + " %%%%%%%%%%%%%%%");
        var count = 0;
        while ((yield count) < 1) {
            for (let i = 1; i <= 7; i++) {
                yield protractor_1.browser.sleep(4000);
                let required = yield (0, protractor_1.element)(protractor_1.by.css("div[class='dataTables_scrollBody'] table tbody tr:nth-child(" + i + ") td:nth-child(2)"));
                console.log(yield required.getText());
                let test = yield required.getText();
                if ((yield test) == "First Prize Pies") {
                    yield (0, protractor_1.element)(protractor_1.by.css("table tbody tr:nth-child(" + i + ") td:nth-child(1)")).click();
                    count++;
                }
            }
            //  if(await count <1)
            //  {
            //   await browser.manage().window().maximize();
            //   await browser.sleep(5000);
            //   await element(by.css("li[id*='products-grid_next']")).click();
            //  }
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF2YW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYXZhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFekIsSUFBSSxlQUFlLENBQUM7SUFDckIsVUFBVSxDQUFDO1FBQ1AsZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNwRCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUNyQixNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLGdFQUFnRTtRQUNqRSxzREFBc0Q7UUFDckQsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdkQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLHdDQUF3QztJQUV4QywyRUFBMkU7SUFDM0UscUVBQXFFO0lBQ3JFLDBDQUEwQztJQUUxQyxpREFBaUQ7SUFDakQsNENBQTRDO0lBQzVDLHFEQUFxRDtJQUNyRCxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFNBQVM7SUFHVCxJQUFJO0lBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBeUNJO0lBRUosRUFBRSxDQUFDLGNBQWMsRUFBQyxHQUFRLEVBQUU7UUFFeEIsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0Usb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFD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