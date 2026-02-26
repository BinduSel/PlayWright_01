
import {test} from '@playwright/test'
import { productsPage } from '../pages/products.page'
import { iPhoneFLPPage } from '../pages/iPhoneFLP.page'

//
// Refine your label or accessible name to ensure it matches only one element.
// Use getByRole() for better targeting based on the element’s role and name.
//    Use getByRole() (or getByLabel() with more unique identifiers) to target elements based on roles like button, link, or form controls.
// Use .first() or .nth() if multiple elements need to be handled.
// Use CSS or XPath selectors to be more specific and avoid multiple elements with the same label.
let page;
let products;
let flp;

test.beforeEach(async ({browser})=>{

page = await browser.newPage()
products = new productsPage(page);
flp = new iPhoneFLPPage(page);

await products.launchUrl();


})


test('verify iphone flow', async()=>{

    await products.iPhoneModel();
    await flp.goToiPhonePDP();
    

})