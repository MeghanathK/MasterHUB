import { Assertion,expect } from 'chai';
import { browser, element,by } from 'protractor';
import{PavanLogin} from '../PageObject/PavanLogin'
const pl = new PavanLogin();
export class PavanMeth {

async getLink(link:string){
    await browser.get(link);

}

async ckLogin(){
await pl.btlogin.click();
}

async ckCustomer(){
   await pl.mnucustomer.click();
   browser.sleep(4000);
   await pl.lkcustomer.click();
}

async pgCustomer(){

    expect(await element(by.css(".float-left")).getText()).to.equal("Customers");
}

async setEmail(email:string){
    await pl.txemail.sendKeys(email);
}

async ckSerach(){
    await pl.btSearch.click();
   await browser.sleep(3000);
}

async Result(){
let i=0;
await element.all(by.css("#customers-grid_wrapper  .dataTables_scroll .dataTables_scrollBody table tbody tr")).each(async (row)=>{
   let eid= await row.all(by.css("td")).get(1).getText();
   await console.log(eid);
    if(await eid=="james_pan@nopCommerce.com")
    {
      i++;
     await  console.log( await row.all(by.css("td input")).get(0).isSelected());
        await   row.all(by.css("td input")).get(0).click();
        await  console.log( await row.all(by.css("td input")).get(0).isSelected());
    }
    
})
if(i<1){expect.fail("Fail it as result not found %%%%%%%%%%%%%%%%%%%%%%%");}


}

// async setName(name:string){
//    await pl.txfistName.sendKeys(name);
// }

}