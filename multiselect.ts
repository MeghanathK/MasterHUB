import { browser, element,by, protractor } from 'protractor';
describe('angularjs homepage', function () {
    // var originalTimeout;
    // beforeEach(function() {
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    // });
   
    it('should greet the named user', async ()=> {
     await  browser.get("https://naveenautomationlabs.com/opencart/");
     var a=["MacBook","iPhone"];
     let items =await element.all(by.css("div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12'] div div h4 a"));
        for (var i=0;i<items.length;i++)
        {
            let item = await items[i].getText();
            if(a.includes(item))
            {
                let cl = await element.all(by.xpath("(//div[@class='product-thumb transition'])/div[3]/button[1]")).get(i).click();
                //await cl[i].click();
                browser.sleep(3000);
            }
        }
        //await element(by.xpath("(//div[@class='product-thumb transition'])/div[3]/button[1]"));
  browser.sleep(9000);

  //cart total

let ctv = await (await (element(by.css("#cart-total")).getText())).split("$");
await element(by.css("#cart-total")).click();
let sum = await ctv[1];
console.log(sum+"********************************************************************");
  await element(by.partialLinkText("View Cart")).click();
 let tot = await (await element(by.css(".col-sm-4.col-sm-offset-8 .table.table-bordered tbody tr:nth-child(4) td:nth-child(2)")).getText()).split("$");
 
let total = await tot[1];

expect(total).toBe(sum);

await element.all(by.css("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/account']")).get(1).click();
 var EC= protractor.ExpectedConditions;
// await browser.wait(EC.titleIs("Account Login"),8000);

//check for wait and fix this issue
await browser.sleep(4000);
console.log(await browser.getTitle());






    })
})
