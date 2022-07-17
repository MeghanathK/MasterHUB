import { randomInt } from 'crypto';
import { element,by,browser } from 'protractor';


export class RahulSteps2{
    static text:string;
    async captureText()
    {
        var num = await Math.floor(Math.random() * 100) + 1;
        RahulSteps2.text =await element(by.css("label[for='exampleCheck1']")).getText()+num;
     console.log(RahulSteps2.text);
     //var num = await Math.floor(Math.random() * 100) + 1;

     console.log(await num);
     

    }
}