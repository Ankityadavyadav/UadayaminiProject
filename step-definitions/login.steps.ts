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







    // await page.locator('.inventory_item').first().click();

    // await page.locator("#username").fill("standard_user");
    // await page.locator("#password").fill("secret_sauce");
    // await page.locator("button[type='submit']").click();


    


    //     //  
    //     // /html/body/div/div/div[1]/div[2]/div[2]/div/div/div[2]/div/div/div/div/div/button


    //     await page.getbyRole('button', { name: 'SEARCH FLIGHTS' }).click();
    //     await page.waitForTimeout(5000);
        
    //     locator and action 

    //     const loginbutton = page.getByRole('button', { name: 'LOGIN' });
    //     awit loginbutton.click();


    //     await page.locator('button:has-text("BOOK NOW")').click();


    //     await page.getByRole('button', { name: 'BOOK NOW' }).click();
    //     await page.getByLabel('First Name').fill('John');
    //     await page.getByPlaceholder('Last Name').fill('Doe');
    //     await page.getByText('Email').fill('john.doe@example.com');
     // await page.getByTestId('phone-number').fill('1234567890');



    //     CSS selector
    //     XPATH




        
    //     await page.getbyRole('button   ', { name: 'SEARCH FLIGHTS' }).click();
    //     await page.getByRole('link', { name: 'FLIGHTS' }).click()

    //     await page.getByRole('textbox', { name: 'From' }).fill('New York');

        
    //     button,link,heading,checkbox,radio,combobox,menuitem,option,progressbar,scrollbar,slider,spinbutton,switch,tab,tabpanel,textbox 


    //     await   page.getByRole('button', { name: 'Add to cart', exact: true }) 

        


    //         await page.getByLabel('Email or mobile number').fill('secret_sauce');

        

    //         await page.locator('#user-name').fill('standard_user');   // by id
    //         await page.locator('.title');                              // by class
    //         await page.locator('[data-test="login-button"]').click();  // by attribute
    //         await page.locator('div.inventory_item > .btn').click();   // combinators





    //         const card = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
    //         await card.getByRole('button', { name: 'Add to cart' }).click();


    //         Filtering 
    //         page.locator('.inventory_item').filter({ hasText: 'Sauce' });
    //         page.locator('.inventory_item').filter({ has: page.getByRole('button', { name: 'Add to cart' }) }).click();


    //         const items = page.locator('.inventory_item');
    //         await expect(items).toHaveCount(6);

    //         await items.first().click();
    //         await items.last().click();
    //         await items.nth(2).click();    //0-indexed

    //         names =await items.allTextContents();
    //         console.log(names);



