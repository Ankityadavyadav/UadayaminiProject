# Playwright Mini Project (Meta-Learning Track)

This project uses [SauceDemo](https://www.saucedemo.com/) to practice real UI automation:

1. Login success
2. Login failure
3. Add product to cart and complete purchase

## Run

```bash
npm test
```

```bash
npm run test:headed
```

```bash
npm run test:ui
```

## Project layout

- `tests/saucedemo.e2e.spec.ts` -> end-to-end scenarios with step-by-step flow
- `tests/pages/LoginPage.ts` -> login page actions/locators
- `tests/pages/InventoryPage.ts` -> inventory/cart actions
- `tests/pages/CheckoutPage.ts` -> checkout actions
- `tests/data/users.ts` -> reusable test users
- `playwright.config.ts` -> test runner configuration

## Step-by-step explanation (what to learn)

### Step 1: Understand test structure

In `tests/saucedemo.e2e.spec.ts`, each `test(...)` is one user journey.
Use `test.step(...)` to break the journey into readable chunks.

Meta learning:
- Think in user outcomes, not code first.
- Example outcome: "User can buy one item."

### Step 2: Separate page actions from test intent

In `tests/pages/*.ts`, page classes hide selectors and click/fill actions.
Tests stay clean and readable.

Meta learning:
- Specs answer "what is being validated".
- Page objects answer "how UI is manipulated".

### Step 3: Keep test data in one place

`tests/data/users.ts` stores credentials.

Meta learning:
- Data changes should not force editing many test files.

### Step 4: Write assertions after every critical action

Examples used:
- `toHaveURL(...)`
- `toBeVisible()`
- `toContainText(...)`

Meta learning:
- Action without assertion = weak test.
- Assert state transitions: login page -> inventory -> cart -> checkout -> success.

### Step 5: Learn fast with an upgrade loop

Use this loop for every new test:

1. Write one tiny scenario.
2. Run only that scenario.
3. Make it deterministic (stable locators + clear assertions).
4. Refactor duplication into page objects.
5. Add one edge case.

## Fast practice roadmap (next 60 minutes)

1. Add a test for locked out user (`locked_out_user`) and assert the exact error.
2. Add a test for removing an item from cart.
3. Add a test for missing checkout fields (first name empty).
4. Tag tests with `@smoke` and run only smoke tests.

## Useful commands

Run one file:

```bash
npx playwright test tests/saucedemo.e2e.spec.ts
```

Run one test by title:

```bash
npx playwright test -g "user can buy one item from start to finish"
```

Open last HTML report:

```bash
npm run report
```
