import { When, Then } from '@cucumber/cucumber';

import{calcuator} from "../PageObject/Calculator"

const po= new calcuator();

   When('user enters {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await po.txfirst.sendKeys(string);
    await po.txsec.sendKeys(string2);

  });

  Then('sum should be displayed as {string}', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    await po.btgo.click();
  });
