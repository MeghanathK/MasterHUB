import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';

import{RahulSteps} from "../Stepmethods/RahulSteps";
import{RahulSteps2} from "../Stepmethods/RahulSteps2"

const r1=new RahulSteps();
const r2=new RahulSteps2();
Given('user navigates to {string}', async function (string) {
    await r1.Navigation(string);
  
  });

  
  When('When step here user enters the {string} in the name filed',async function (string) {
   await  r1.getName(string);
  });

  Then('take the required text', async function () {
   await r2.captureText();
  });

  
//   Then('Submit it in password section', function () {
//   r1.submitpass(r2.text);
//   browser.sleep(10000);
//   });

