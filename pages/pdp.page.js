import {page} from '@playwright/test'

export class pdpPage{


constructor(page, color){
let colorName = color;
this.page=page;
this.selectcolor= page.locator(`input[value="${colorName}"]`);

}


async selectConfigs(){

   //await this.selectcolor.click();
}

}