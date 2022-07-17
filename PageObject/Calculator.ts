import { By, by, element,browser, ElementFinder } from "protractor";
export class calcuator
{
    txfirst:ElementFinder = element(by.model("first"));
    txsec = element(by.model("second"));
    btgo = element(by.id("gobutton"));
    
    
}