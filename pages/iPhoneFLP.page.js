
import  {page, expect } from '@playwright/test'

export class iPhoneFLPPage{


constructor(page){

    this.page = page;
    this.buyButton = page.getByRole('link', {name :'Buy, iPhone 17 Pro'}).nth(2)
    //locator would pick first element, where as inbuilt locators throw strict mode violation error
    //indexing for inbuilt locators
    this.iPhonepdp = page.getByRole('heading', {name: 'Buy iPhone 17 Pro'})


}

async goToiPhonePDP(){

await this.buyButton.click();
await expect(this.iPhonepdp).toBeVisible


}

}