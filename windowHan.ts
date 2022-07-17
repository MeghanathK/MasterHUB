import { browser, element,by, protractor } from 'protractor';
describe('angularjs homepage', function () {
    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
   
    it('should greet the named user', async ()=> {
     await  browser.get(" https://opensource-demo.orangehrmlive.com/");
     //let parent = await browser.getWindowHandle();
     await element.all(by.css("#social-icons a")).each(async function(link){
         await link.click();
         })
         
         let Windows = await browser.getAllWindowHandles();
         //let parent = await browser.getWindowHandle();
         for (let i=0;i<Windows.length;i++)
         {
           await browser.switchTo().window(Windows[i]);
           if (await (await browser.getTitle()=="OrangeHRM Inc - YouTube"))
           {
            console.log(await browser.getTitle());
             break;
           }
         }
         let parent = await browser.getWindowHandle();
         await browser.switchTo().window(parent);
         console.log(await browser.getTitle());


        
    
    
    })

    
    })

