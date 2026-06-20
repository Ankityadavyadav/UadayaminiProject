import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures';

// createBdd is a function connects Cucumber keywords to Playwright test functions. It takes an object with the following properties:

export const { Given, When, Then } = createBdd(test);
console.log('LOGIN STEPS LOADED');
Given('I am on the login page', async ({ loginPage }) => {

});

When('I login with username {string} and password {string}', async ({ loginPage }, username:string, password:string) => {
    await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async ({ page }) => {
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});


