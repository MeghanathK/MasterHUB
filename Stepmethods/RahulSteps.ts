import { browser, element ,by} from 'protractor';
export class RahulSteps{

Navigation (link:string){
    browser.get(link);
}

async getName(name:string){
    await element(by.css("div[class='form-group'] input[name='name']")).sendKeys(name);
}

async submitpass(word:string)
{
    await console.log(word)
    await element(by.css("input[name='email']")).sendKeys(word);
    browser.sleep(10000);
}

}