import { Page } from '@playwright/test';

// This line bring in a tool from the Playwright {Page} library that allows us to 
// interact with web pages in our tests. The 'Page' class provides methods to navigate,
//  interact with elements, and perform various actions on a web page.

export class BasePage {
    // export means other files can use this class. Without export, only this file can see it.
    // class creates a blueprint. Like a recipe. The recipe itself is not food — 
    // but you can use it to make food.
    // BasePage is the recipe for 'a page that has shared helper methods'.

    protected page: Page;
    //protected = only me and my children can use it.
    //private = only me, nobody else.
    //public = anyone can use it. We use protected here so LoginPage can also access this.page.

    constructor(page: Page) {
        
        this.page = page;
    }


    async waitForLoad() {
        await this.page.waitForLoadState('load');
    }
    // async means this method uses await inside it. 
    // Every method that does something in the browser needs async.

    //waitForLoadState('load') tells Playwright to pause and wait until the entire page has finished loading.
    //No guessing, no sleep timers — it waits for the real signal.



    async getPageTitle(){
        return await this.page.title();
    }
        //title of the web page. Like 'Swag Labs' or 'Google'.

    async getPageURL(){
        return await this.page.url();   
        }

       //'https://www.saucedemo.com/inventory.html'
    }
