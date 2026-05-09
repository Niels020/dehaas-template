import { test, expect, type ConsoleMessage } from "@playwright/test";

const routes = ["/", "/contact"] as const;

for (const route of routes) {
  test(`route ${route} loads with no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg: ConsoleMessage) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(errors, `unexpected console errors on ${route}:\n${errors.join("\n")}`).toEqual([]);
  });
}
