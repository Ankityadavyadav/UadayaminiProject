import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async getHeadline() { //Products
        return  this.page.locator('.title').textContent();
        // reads the text content of the element with class 'title' and returns it as string.
        //  In this case, it should return 'Products' when we're on the products page.
    }

    async getProductCount() {
        return  this.page.locator('.inventory_item').count();
        // counts how many elements have the class 'inventory_item' and returns that number.
        //  In this case, it should return the  6 number of products displayed on the page.

    } 
    
    async getProductNames() {
        return  this.page.locator('.inventory_item_name').allTextContents();
        //["Sauce Labs Backpack", "Sauce Labs Bike Light", "clothing"...].
        // textContent() gets the text of a single element, while allTextContents()
        //  gets an array of texts from all elements that match the locator.

        
    }

    async getProductPrice(productName: string) {
    
        return this.page
        .getByRole('listitem')
        .filter({ hasText: productName })
        .locator('.inventory_item_price')
        .textContent();
    } 
    
     async addToCart(productName: string) {
    await this.page
      .getByRole('listitem')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }
 
  async removeFromCart(productName: string) {
    await this.page
      .getByRole('listitem')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Remove' })
      .click();
  }
 
  async getCartBadgeCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    const isVisible = await badge.isVisible();
    if (!isVisible) return '0';
    return badge.textContent();
  }
 
  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
 
  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
 
}


