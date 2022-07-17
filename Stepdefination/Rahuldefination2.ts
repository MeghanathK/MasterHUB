import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';

import{RahulSteps} from "../Stepmethods/RahulSteps";
import{RahulSteps2} from "../Stepmethods/RahulSteps2"

const r1=new RahulSteps();
const r2=new RahulSteps2();

Then('Submit it in password section', function () {
    r1.submitpass(RahulSteps2.text);

    
    });