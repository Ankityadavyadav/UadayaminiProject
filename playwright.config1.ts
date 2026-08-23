import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Specify the directory where your test files are located
  fullyParallel: true, // Run tests in files in parallel 
  timeout: 30 *1000,  // Set a global timeout for each test
  forbidOnly: !!process.env.CI, // Fail the build on CI if test.only is left in the source code
  retries: process.env.CI ? 2 : 0,  // Retry on CI only
  workers: process.env.CI ? 1 : undefined, // Use a single worker on CI for consistent results
  reporter: 'html',  
  use: {   
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry'
  },
  projects: [ 
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});




  