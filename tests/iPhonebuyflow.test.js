
import {test} from '@playwright/test'
import { productsPage } from '../pages/products.page'
import { iPhoneFLPPage } from '../pages/iPhoneFLP.page'

import data from '../testdata/data.json'
import { pdpPage } from '../pages/pdp.page';

//
// Refine your label or accessible name to ensure it matches only one element.
// Use getByRole() for better targeting based on the element’s role and name.
//    Use getByRole() (or getByLabel() with more unique identifiers) to target elements based on roles like button, link, or form controls.
// Use .first() or .nth() if multiple elements need to be handled.
// Use CSS or XPath selectors to be more specific and avoid multiple elements with the same label.
let page;
let products;
let flp;
let pdp;

test.beforeEach(async ({browser})=>{

page = await browser.newPage()
products = new productsPage(page, data.iPhoneName);
flp = new iPhoneFLPPage(page, data.iPhoneName);
pdp = new pdpPage(page, data.iPhoneColor);

await products.launchUrl();


})


test('verify iphone flow', async()=>{

    await products.iPhoneModel();
    await flp.goToiPhonePDP();
    await expect(this.iPhonepdp).toBeVisible();
    await pdp.selectConfigs();

})