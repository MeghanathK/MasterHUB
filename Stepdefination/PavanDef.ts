import { Then, When, Given } from '@cucumber/cucumber';
import { browser } from 'protractor';
import{PavanMeth} from '../Stepmethods/PavanMeth'

const pm = new PavanMeth()
Given('user hits on the link {string}', async(string)=> {

//pm.getLink(string);
await browser.get(string);
await browser.manage().window().maximize();

});


When('user click on login button', async ()=> {
await pm.ckLogin();
});

When('user click on customers menu', async ()=> {
   await pm.ckCustomer();
});


Then('customes page appears', async ()=> {
   await pm.pgCustomer();
});

When('user enters email {string} and click on search button', async (string)=> {
    await pm.setEmail(string);
    await pm.ckSerach();
});

Then('search result should be displayed', async ()=> {
   await pm.Result();
});

// When('user enters firstname {string} and click on search button', async (string)=> {
//     await pm.setName(string);
//     await pm.ckSerach();
// });






