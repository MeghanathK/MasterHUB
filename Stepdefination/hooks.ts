import { After, Before, Status } from "@cucumber/cucumber";

import { element, browser } from 'protractor';


Before({tags:"@smoke and @feature2"},function () {
    // This hook will be executed before all scenarios
    browser.driver.manage().window().maximize();
    
  });

  After(async function (scenario) {
      if(scenario.result.status=== Status.FAILED)
      {
       var screenshot =await browser.takeScreenshot();
       this.attach(screenshot,"impage/png");
      }
 
    
  });