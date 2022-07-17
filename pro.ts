import { browser, element,by, ElementFinder, ElementArrayFinder } from "protractor";
import {Credenitals} from './Credentials'

let d= new Credenitals();

describe('angularjs homepage', function () {
   
  it('should greet the named user', async ()=> {
    browser.get("https://rahulshettyacademy.com/angularpractice/");
    
   await element(by.css("div[class='form-group'] input[name='name']")).sendKeys((d.Owner.split(":"))[0]);
   await element(by.css("input[name='email']")).sendKeys((d.Owner.split(":"))[1]);
   var flag = await element(by.css("#exampleCheck1")).isEnabled();

   let dp =await element(by.css('#exampleFormControlSelect1')).all(by.tagName("option"));
   let tec = await dp[1].getText();
    console.log(tec);
    await dp[1].click();
    browser.sleep(9000);
   var  value1

  let amz=  await element.all(by.css('#exampleFormControlSelect1 option'));
  //console.log(await amz[0].getText());

  for (var i=0;i<amz.length;i++)
  {
    var  geneder = await  amz[i].getText();
    await console.log(geneder);
  }

 await element.all(by.css('#exampleFormControlSelect1 option')).then(async function(texts){
       var value = await texts[1].getText();
       value1=value;
       for (var i=0;i<texts.length;i++)
       {
         var  geneder = await  texts[i].getText();
         console.log(geneder);
       }
       
     });
     
      console.log(value1);

    expect(element(by.css("input[class='ng-untouched ng-pristine ng-valid']")).getText()).toBe("megahantaha");



  });


  });