import { test,expect} from '../fixtures';
import { users,products } from '../data/testdata';


//----------------------
// LOGIN TESTS
//----------------------

test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(users.standard_user.username, users.standard_user.password  );
});// run before each test in this file, 
// and it will log in with the provided credentials before each test runs.



test('TC01 - Validate login goes to products page', async ({ loginPage, page }) => {
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
 
  expect(await productsPage.getHeadline()).toBe('Products');
  expect(await productsPage.getProductCount()).toBe(6);
 
});

test('TC05 - add one product to cart', async ({ loginPage, productsPage }) => {
 
  await productsPage.addToCart(products.backpack);
 
  expect(await productsPage.getCartBadgeCount()).toBe('1');
 
});
 
test('TC06 - add two products cart badge shows 2', async ({ loginPage, productsPage }) => {
 
  await productsPage.addToCart(products.backpack);
  await productsPage.addToCart(products.bikeLight);
 
  expect(await productsPage.getCartBadgeCount()).toBe('2');
 
});


test('API test case to check get ',async({request})=>{
  const responce = await request.get('https://reqres.in/api/users?page=2');
  expect(responce.ok()).toBeTruthy();
  expect(responce.status()).toBe(200);
  const body= await responce.json();
  expect(body.name).toBe('Michael');

});

test('API test case to check post',async({request})=>{
  const responce = await request.post('https://reqres.in/api/users',{
    data:{ name:'john',job:'QA'},});
    expect(responce.ok()).toBeTruthy();
    expect(responce.status()).toBe(201);
  });


  test('API put tset case',async({request})=>{
    const res= await request.put('https://reqres.in/api/users/2',{ data:{name:'johna',}});
    expect(res.ok()).toBeTruthy();
    expect(res.status()).toBe(200);
  })


  test('auth token test case',async({request})=>{
    const loginres = await request.post('/auth/login',{
      data:{username:"ankit@tcs.com",password:"Ankit@123"},});
    const { token } = await loginres.json();
    
    const res = await request.get('/protected/resource', {
      headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      }
    );
    expect(res.ok()).toBeTruthy();
    expect(res.status()).toBe(200);
    
  });





