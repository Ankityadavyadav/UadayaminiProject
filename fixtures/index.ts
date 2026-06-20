import { test as base } from 'playwright-bdd';
import { LoginPage }    from '../pages/LoginPage';
import { ProductPage } from '../pages/Productpage';
import { CheckOutPage } from '../pages/CheckOutPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductPage;
    CheckOutPage: CheckOutPage;
    //a=1 = type(a) = number
    //a='hello' = type(a) = string
    //a=true = type(a) = boolean
};

export const test = base.extend<MyFixtures>({
    //base.extend() takes the original Playwright test and adds our custom fixtures to it. 
    // The result is stored as test — our own upgraded version of test.
    
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage); // apuse button 
  },
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductPage(page);
    await use(productsPage);
  },
  CheckOutPage: async ({ page }, use) => {
    const checkOutPage = new CheckOutPage(page);
    await use(checkOutPage);
  }
});

export { expect } from '@playwright/test';

