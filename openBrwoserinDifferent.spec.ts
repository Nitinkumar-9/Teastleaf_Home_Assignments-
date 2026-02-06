import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.goto('https://www.flipkart.com/')



})