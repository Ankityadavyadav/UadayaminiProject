import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckOutPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async getItemCount() {
    return this.page.locator('.cart_item').count();
  }

  async getItemNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getItemPrice(productName: string) {
    return this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .locator('.inventory_item_price')
      .textContent();
  }

  async removeItem(productName: string) {
    await this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async continueShopping() {
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async isEmpty() {
    const count = await this.getItemCount();
    return count === 0;
  }

}