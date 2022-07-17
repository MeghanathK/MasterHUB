import { browser,by,element } from 'protractor';
import{calcuator} from '../PageObject/Calculator'
var chai= require('chai');

const po= new calcuator();
 
 export class calmethods
 {
     
    async geturl(link:string)
     {
        await browser.get(link);
     }
     async getnumbers(first:number,sec:number)
     {
       // await element(by.model("first")).sendKeys(first);
       await po.txfirst.sendKeys(first);
        //await element(by.model("second")).sendKeys(sec);
        await po.txsec.sendKeys(sec);
     }
 }