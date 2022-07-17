import { Then, When, Given } from '@cucumber/cucumber';
import { browser, element,by } from 'protractor';
import{PavanMeth} from '../Stepmethods/meguMethod'
import { Assertion,expect } from 'chai';

Given('user hits on the link {string}', async(string)=> {
 await browser.get(string);
  });

  When('user click on login button', async ()=> {
   await element(by.css("button[type='submit']")).click();
  });

  
  When('user click on customers menu', async ()=> {
   await element(by.css("a[href*='#'] i[class*='nav-icon far fa-user']")).click();
   await browser.sleep(4000);
   await element(by.css("a[href='/Admin/Customer/List'] i")).click();
  });

  Then('customes page appears', async ()=> {
    expect(await element(by.css(".float-left")).getText()).to.equal("Customers");
  });

  When('user enters email {string} and click on search button', async (string)=> {
    await element(by.id("SearchEmail")).sendKeys(string);
    await element(by.id("search-customers")).click();
    await browser.sleep(4000);
  });

  When('user enters first name {string} and click on search button', async (string)=> {
    await element(by.id("SearchFirstName")).sendKeys(string);
    await element(by.id("search-customers")).click();
    await browser.sleep(4000);
  });

  Then('search result should be displayed', async ()=> {
    let i=0;
    await element.all(by.css("#customers-grid_wrapper  .dataTables_scroll .dataTables_scrollBody table tbody tr")).each(async (row)=>{
       let eid= await row.all(by.css("td")).get(1).getText();
       await console.log(eid);
        if(await eid=="james_pan@nopCommerce.com")
        {
          i++;
         await  console.log( await row.all(by.css("td input")).get(0).isSelected());
            await   row.all(by.css("td input")).get(0).click();
            await  console.log( await row.all(by.css("td input")).get(0).isSelected());
        }
        
    })
    if(i<1){expect.fail("Fail it as result not found %%%%%%%%%%%%%%%%%%%%%%%");}  
  });
