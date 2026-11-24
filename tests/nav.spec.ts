import { test, expect } from '@playwright/test';

test('every nav link (including dropdown panels) resolves without 404', async ({ page, baseURL }, testInfo) => {
  test.setTimeout(90_000);
  // Link-validity check only — run once; narrower viewports hide the desktop dropdown
  // panel off-screen (mobile nav is a separate overlay, covered by its own test below).
  test.skip(testInfo.project.name !== 'Desktop Chrome', 'link validity only needs checking once');
  await page.goto('/');

  // Open both dropdowns so their panel links are present/clickable in the DOM
  const toggles = page.locator('.nav-dropdown-toggle');
  const toggleCount = await toggles.count();
  for (let i = 0; i < toggleCount; i++) {
    await toggles.nth(i).click({ force: true });
  }

  const hrefs = await page
    .locator('.nav-links a[href]')
    .evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).getAttribute('href')));

  const uniqueHrefs = Array.from(new Set(hrefs.filter((h): h is string => !!h && h.startsWith('/'))));
  expect(uniqueHrefs.length).toBeGreaterThan(0);

  for (const href of uniqueHrefs) {
    const res = await page.request.get(new URL(href, baseURL).toString());
    expect(res.status(), `nav link ${href} should not 404`).toBeLessThan(400);
  }
});

test('every footer link resolves without 404', async ({ page, baseURL }) => {
  test.setTimeout(90_000);
  await page.goto('/');
  const hrefs = await page
    .locator('footer.site-footer a[href]')
    .evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).getAttribute('href')));

  const internal = Array.from(new Set(hrefs.filter((h): h is string => !!h && h.startsWith('/'))));
  for (const href of internal) {
    const res = await page.request.get(new URL(href, baseURL).toString());
    expect(res.status(), `footer link ${href} should not 404`).toBeLessThan(400);
  }

  const mail = hrefs.filter((h) => h?.startsWith('mailto:'));
  const tel = hrefs.filter((h) => h?.startsWith('tel:'));
  expect(mail.length, 'footer should contain mailto links').toBeGreaterThan(0);
  expect(tel.length, 'footer should contain tel links').toBeGreaterThan(0);
});

test('desktop dropdown menus open on click and link to real pages', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'Desktop Chrome', 'dropdown hover/click pattern is desktop-only');
  await page.goto('/');
  const capabilitiesToggle = page.locator('.nav-dropdown-toggle', { hasText: 'Capabilities' });
  await capabilitiesToggle.click();
  const panel = capabilitiesToggle.locator('xpath=following-sibling::div[contains(@class,"nav-dropdown-panel")]');
  await expect(panel.locator('a', { hasText: 'Engineering & Design' })).toBeVisible();
  await panel.locator('a', { hasText: 'Engineering & Design' }).click();
  await expect(page).toHaveURL(/\/engineering-design$/);
});

test('mobile hamburger opens full-screen nav and a link navigates', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'Mobile', 'mobile nav overlay is mobile-only');
  await page.goto('/');
  await page.locator('.nav-toggle').click();
  await expect(page.locator('.nav-links')).toHaveClass(/is-open/);
  await page.locator('.nav-links a', { hasText: 'About' }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator('.nav-links')).not.toHaveClass(/is-open/);
});

test('active nav link is highlighted on its own page', async ({ page }) => {
  await page.goto('/facilities');
  await expect(page.locator('.nav-links a[href="/facilities"]')).toHaveClass(/is-active/);
});
