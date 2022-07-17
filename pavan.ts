import { browser, element,by } from 'protractor';
describe('angularjs homepage', function () {

      var originalTimeout;
     beforeEach(function() {
         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
     });
  
     beforeEach(async ()=> {
     await  browser.get("https://admin-demo.nopcommerce.com/Admin");
     await browser.manage().window().maximize();
    //await element(by.id("Email")).sendKeys("admin@yourstore.com");
   // await element(by.id("Password")).sendKeys("admin");
    await element(by.css("button[type='submit']")).click();

    })

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

    it("new testing ",async ()=>{
   
        await element(by.css("a[href*='#'] i[class*='nav-icon far fa-user']")).click();
        browser.sleep(3000);
        await element(by.css("a[href='/Admin/CustomerRole/List'] i")).click();
        await element(by.css(".btn.btn-primary")).click();
        await browser.sleep(3000);
        await browser.refresh();
        await element(by.xpath("//button[normalize-space()='Choose a product']")).click();
       let windows =await browser.getAllWindowHandles();
     await browser.switchTo().window(windows[1]);
     
     await browser.manage().window().maximize();
     await browser.sleep(4000);
     let tbrows = await element.all(by.css("div[class='dataTables_scrollBody'] table tbody tr"));
     let tbcols = await element.all(by.css("table tbody tr:nth-child(1) td"));
     await console.log(await tbrows.length +" %%%%%%%%%%%%%%%");
var count =0;
while(await count<1){
  for (let i=1;i<=7;i++)
     {
      
      await browser.sleep(4000);
       let required = await element(by.css("div[class='dataTables_scrollBody'] table tbody tr:nth-child("+i+") td:nth-child(2)"));
        console.log(await required.getText());
        let test = await required.getText();

       if(await test =="First Prize Pies")
       {
        await element(by.css("table tbody tr:nth-child("+i+") td:nth-child(1)")).click();
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
            


    })


})
