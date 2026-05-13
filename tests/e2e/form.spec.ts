import { test, expect } from "@playwright/test";

test.describe("contact page", () => {
  test("renders and has a reachable contact method", async ({ page }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();

    // Current state: mailto link. Replace this block once a real <form> exists.
    const mailto = page.locator('a[href^="mailto:"]');
    await expect(mailto).toBeVisible();
  });
});
