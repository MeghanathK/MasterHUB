import { browser, element, by, protractor } from 'protractor';
describe('angularjs homepage', function () {
   
    it('should greet the named user', async ()=> {
    /* await  browser.get("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    let source = await element(by.css("#box6"));
     let drop = await element(by.css("#box106"));
     let drop2 = await element(by.css("div[id='mainContainer'] h2"));
     let drop3 = await browser.driver.findElement(by.css("div[id='mainContainer'] h2"));
     //#box107
    await browser.actions().mouseDown(source).mouseMove(drop).mouseUp().perform();
     //browser.sleep(9000);
     //await console.log( await drop2.getLocation());
    // await console.log( await drop3.getLocation());
     //await browser.actions().mouseMove({x: 100, y: 0}).sendKeys(protractor.Key.RIGHT,protractor.Key.ENTER).perform();
     
     
     await browser.actions().click(await drop2,protractor.Button.RIGHT).perform();
     browser.sleep(9000);*/

     await browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    let ele = await element(by.css(".context-menu-one.btn.btn-neutral"));
    await browser.actions().click(await ele,protractor.Button.RIGHT).perform();

     
       await  browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
       await  browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
      await  browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    
     await browser.actions().sendKeys(protractor.Key.ENTER).perform();

     console.log(await browser.switchTo().alert().getText());
   
     browser.sleep(9000);

     


    })

})