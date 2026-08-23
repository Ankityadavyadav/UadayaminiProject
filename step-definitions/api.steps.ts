import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures';

export const { Given, When, Then } = createBdd(test);

Given('the API base url is set', async () => {
  // The API client fixture creates the request context with the configured base URL.
});

When('I send a GET request to {string}', async ({ apiClient }, path: string) => {
  await apiClient.get(path);
});

When('I send a POST request to {string} with body:', async ({ apiClient }, path: string, dataTable) => {
  const payload = dataTable.rowsHash();
  await apiClient.post(path, payload);
});

When('I send a PUT request to {string} with body:', async ({ apiClient }, path: string, dataTable) => {
  const payload = dataTable.rowsHash();
  await apiClient.put(path, payload);
});

Then('the response status should be {int}', async ({ apiClient }, status: number) => {
  await apiClient.expectStatus(status);
});

Then('the response body should contain {string}', async ({ apiClient }, key: string) => {
  await apiClient.expectBodyToContain(key);
});

Then('the response field {string} should equal {string}', async ({ apiClient }, field: string, value: string) => {
  await apiClient.expectFieldToEqual(field, value);
});


