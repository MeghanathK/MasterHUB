import { Given, Then, When } from '@cucumber/cucumber';
import { browser, element,by } from 'protractor';
import {calmethods} from "../Stepmethods/calculatormeth";
import{calcuator} from '../PageObject/Calculator'

const chai = require('chai');
var expect = chai.expect;

var assert = chai.asset;
const po= new calcuator();

const cal = new calmethods();
Given('user navigated to {string}', async (stringa)=> {
    // Write code here that turns the phrase above into concrete actions
    //await browser.get(stringa);
    await cal.geturl(stringa);
  });




  When('user enters {int} and {int}', async(int1, int2)=> {
    // Write code here that turns the phrase above into concrete actions
     await po.txfirst.sendKeys(int1);
     await po.txsec.sendKeys(int2);
   // await cal.getnumbers(int1,int2);
  });



  When('clicked on go button', async ()=> {
    // Write code here that turns the phrase above into concrete actions
   await element(by.id("gobutton")).click();
  });



  Then('sum should be displayed as {int}', async (int)=> {
    // Write code here that turns the phrase above into concrete actions
   await  console.log("given number validate "+int);
   
   await expect.fail("faiiling test-*******************");
   await browser.sleep(6000);

  });