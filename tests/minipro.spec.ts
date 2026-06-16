import { test,expect} from '../fixtures';

//----------------------
// LOGIN TESTS
//----------------------

test('TC01 - Validate login goes to products page', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

});

test('TC02 - Wrong password shows error', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'wrong_password');
    await expect(page.locator('.error-message')).toBeVisible();

});

test('TC03 - empty fields show error', async ({ loginPage }) => {
 
  await loginPage.login('', '');
  expect(await loginPage.isErrorVisible()).toBe(true);
  expect(await loginPage.getErrorMessage()).toContain('Username is required');
 
});

//----------------------
// PRODUCTS TESTS
//----------------------

test('TC04 - products page shows 6 items', async ({ loginPage, productsPage }) => {
 
  await loginPage.login('standard_user', 'secret_sauce');
 
  expect(await productsPage.getHeadline()).toBe('Products');
  expect(await productsPage.getProductCount()).toBe(6);
 
});

test('TC05 - add one product to cart', async ({ loginPage, productsPage }) => {
 
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addToCart('Sauce Labs Backpack');
 
  expect(await productsPage.getCartBadgeCount()).toBe('1');
 
});
 
test('TC06 - add two products cart badge shows 2', async ({ loginPage, productsPage }) => {
 
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addToCart('Sauce Labs Backpack');
  await productsPage.addToCart('Sauce Labs Bike Light');
 
  expect(await productsPage.getCartBadgeCount()).toBe('2');
 
});

