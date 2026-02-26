import page from '@playwright/test'

export class productsPage{


constructor(page){

    this.page = page;
    this.buyiPhone = page.locator('.globalnav-content').locator('//span[text()="iPhone"]');
    // can use locator.locator();
    //locator would pick first element, where as inbuilt locators throw strict mode violation error
    this.buyiPhone17Pro = page.locator('.product-list').locator('a[href="/iphone-17-pro/"]')


}

async launchUrl(){
await    this.page.goto('https://www.apple.com/', 'domcontentloaded');
}

async iPhoneModel(){

 //   await this.buyiPhone.hover();  or .focus() - didnt work here
await this.buyiPhone.click();
await this.buyiPhone17Pro.click();

}




}






