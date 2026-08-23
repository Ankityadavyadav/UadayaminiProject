import { expect, APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  private lastResponse?: APIResponse;
  private lastResponseBody: unknown;

  constructor(private readonly request: APIRequestContext) {}

  async get(path: string) {
    return this.send('GET', path);
  }

  async post(path: string, payload?: Record<string, unknown>) {
    return this.send('POST', path, payload);
  }

  async put(path: string, payload?: Record<string, unknown>) {
    return this.send('PUT', path, payload);
  }

  async patch(path: string, payload?: Record<string, unknown>) {
    return this.send('PATCH', path, payload);
  }

  async delete(path: string) {
    return this.send('DELETE', path);
  }

  get response() {
    return this.lastResponse;
  }

  get body() {
    return this.lastResponseBody;
  }

  async expectStatus(statusCode: number) {
    expect(this.lastResponse?.status()).toBe(statusCode);
  }

  async expectBodyToContain(key: string) {
    expect(this.lastResponseBody as Record<string, unknown>).toHaveProperty(key);
  }

  async expectFieldToEqual(field: string, value: string) {
    expect((this.lastResponseBody as Record<string, unknown>)[field]).toBe(value);
  }

  private async send(method: string, path: string, payload?: Record<string, unknown>) {
    const response = await this.request.fetch(path, {
      method,
      data: payload,
    });

    this.lastResponse = response;
    this.lastResponseBody = await this.parseBody(response);

    return response;
  }

  private async parseBody(response: APIResponse) {
    try {
      return await response.json();
    } catch {
      return await response.text();
    }
  }
}