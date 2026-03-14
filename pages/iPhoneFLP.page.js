
import  {page, expect } from '@playwright/test'

export class iPhoneFLPPage{


constructor(page, iPhoneMod){
    let iPhoneName = iPhoneMod;
    this.page = page;
    // this.buyButton = page.getByRole('link', {name :'Buy, iPhone 17 Pro'}).nth(2)
    //this.buyButton = page.getByTitle('${iPhoneName}')
    this.buyButton = page.locator('//div[@class="visibility-desktop marquee-cta"]/div/div/div/div/a');
    //locator would pick first element, where as inbuilt locators throw strict mode violation error
    //indexing for inbuilt locators
    //this.iPhonepdp = page.getByRole('heading', {name: 'Buy iPhone 17 Pro'})
    this.iPhonepdp = page.locator('h1',{hasText : iPhoneName})


}

async goToiPhonePDP(){

await this.buyButton.click();



}

}