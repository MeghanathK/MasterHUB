import { browser, element,by, protractor } from 'protractor';
describe('angularjs homepage', function () {
    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
   
    it('should greet the named user', async ()=> {

await browser.get("https://demo.opencart.com/admin/index.php?route=catalog/category&user_token=5168b78aa9162fbece70e8f7bea53258");
  await element(by.css("input[name='username']")).sendKeys("demo");
  await element(by.css("input[name='password']")).sendKeys("demo");
  await element(by.css("button[type='submit']")).click();
 await browser.sleep(6000);


 var k=0;
 var a="Tablets";
 for (let j=2;j<=5;j++)
 { 
  
    let columns = await element.all(by.css(".table-responsive table tbody tr td:nth-child(2)"));
    for (let i=0;i<columns.length;i++)
    {
       let row = await columns[i].getText();
       if (row==a)
       {
           await element.all(by.css(".table-responsive table tbody tr")).get(i).all(by.css("td")).get(0).click();
           await browser.sleep(9000);
           k++;
           
       }
    //    else{
    //        await element(by.cssContainingText(".page-link",String(j))).click();
    //    }
      
    } 
   if(k=4)
   {
    break;
   }else{
    
    await browser.sleep(9000);
    await element.all(by.css("li[class='page-item'] a")).each(async function(btn){

       let button= Number(await btn.getText());
       
       if(button==j)
       {
        console.log(button+"1111111111111111111111111111111111111111111111111111111111111");
       console.log(await btn.isEnabled())
      // await element.all(by.css("a[href*='page="+j+"']")).first().click();
       await  browser.actions().mouseMove(await btn.element(by.xpath("parent::li"))).click().perform();
       }
    })
await browser.sleep(9000);
}
    
    





 }
 if(k<4)
 {
    expect("something").toBe("something else");
 }
 


 })

    })
