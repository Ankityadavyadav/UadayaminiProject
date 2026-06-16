import  { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // LoginPage is a child of BasePage. It inherits all the methods and properties of BasePage.
    // This means LoginPage can use waitForLoad(), getPageTitle(), and getPageURL() without having to write them again.   

    constructor(page: Page) {
    super(page);
  }
 
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
 
  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async getErrorMessage() {
    return await this.page.getByTestId('error').textContent();
  }

   async isErrorVisible() {
    return this.page.locator('[data-test="error"]').isVisible();
  }

  async onLoginPage(){
    return await this.page.getByRole('button', { name: 'Login' }).isVisible();
    
  }
}