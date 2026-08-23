import { request } from '@playwright/test';
import { test as base } from 'playwright-bdd';
import { LoginPage }    from '../pages/LoginPage';
import { ProductPage } from '../pages/Productpage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { ApiClient } from '../api/apiClient';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductPage;
    CheckOutPage: CheckOutPage;
  apiClient: ApiClient;
   
};

const apiBaseURL = process.env.API_BASE_URL ?? 'https://reqres.in/api';

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
  },
  apiClient: async ({}, use) => {
    const apiRequestContext = await request.newContext({ baseURL: apiBaseURL });
    await use(new ApiClient(apiRequestContext));
    await apiRequestContext.dispose();
  }
});

export { expect } from '@playwright/test';



