import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("homepage loads and has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/StableWork/);

    // Check key elements are present
    await expect(page.getByText("Freelance worldwide")).toBeVisible();
    await expect(page.getByText("Get paid in stablecoins")).toBeVisible();
  });

  test("key pages load correctly", async ({ page }) => {
    // Test direct navigation to key pages
    await page.goto("/how-it-works");
    await expect(
      page.getByRole("heading", { name: "How It Works" }),
    ).toBeVisible();

    await page.goto("/jobs");
    await expect(
      page.getByRole("heading", { name: "Browse Jobs" }),
    ).toBeVisible();

    await page.goto("/freelancers");
    await expect(
      page.getByRole("heading", { name: "Find Freelancers" }),
    ).toBeVisible();

    await page.goto("/pricing");
    await expect(
      page.getByRole("heading", { name: "Simple, Fair Pricing" }),
    ).toBeVisible();
  });

  test("comparison page loads and has correct content", async ({ page }) => {
    await page.goto("/comparison");

    // Check hero section
    await expect(
      page.getByRole("heading", { name: "How StableWork Stacks Up" }),
    ).toBeVisible();

    // Check comparison table
    await expect(page.getByRole("table")).toBeVisible();
    await expect(page.getByRole("cell", { name: "StableWork" })).toBeVisible();
    await expect(page.getByText("Upwork")).toBeVisible();

    // Check that at least one Join Waitlist button exists
    await expect(
      page.getByRole("button", { name: "Join Waitlist" }).first(),
    ).toBeVisible();
  });
});
