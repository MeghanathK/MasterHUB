import { browser, element,by } from 'protractor';
describe('angularjs homepage', function () {
   
    it('should greet the named user', async ()=> {
     await  browser.get("https://naveenautomationlabs.com/opencart/");
     await element(by.css("input[placeholder='Search']")).sendKeys("mobile");
     await element(by.css("button[class='btn btn-default btn-lg']")).click();

     await element.all(by.css("select[name$='category_id'] option")).each(async function(dps){

        if(await dps.getText()=="            test 1")
        {
          await dps.click();
          
        }
        else{
            console.log("fail");
        }
       
     })

     //mouse hover

     //await browser.actions().mouseMove(element(by.linkText("Components"))).mouseMove(await element(by.cssContainingText("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li","Web Cameras (0)"))).click().perform();
     //await browser.actions().mouseMove(element(by.linkText("Components"))).mouseMove(element(by.css("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li:nth-child(3"))).click().perform();
     await browser.sleep(9000);
await element(by.linkText("Components")).click();
     let comp= await element(by.cssContainingText("ul[class='nav navbar-nav'] li:nth-child(3) div div ul li","Web Cameras (0)")).getText();
console.log(comp);
     //left panel displayed

     //expect(element(by.css("#column-left")).isDisplayed()).toBe(true);
    //handleing multiselect dropdown and knowing how many are selected and deseecting all
    
    
    
    })
    })

      