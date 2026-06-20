import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: [
    'step-definitions/**/*.ts',
    'fixtures/index.ts'
  ]
});

export default defineConfig({
  testDir,

  timeout: 30000,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});