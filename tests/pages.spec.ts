import { test, expect, type Page } from '@playwright/test';

const ROUTES = [
  '/',
  '/about',
  '/engineering-design',
  '/manufacturing-fabrication',
  '/industries',
  '/bess-solutions',
  '/facilities',
  '/machinery',
  '/projects',
  '/quality-certifications',
  '/clients',
  '/contact',
];

async function collectConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));
  return errors;
}

async function scrollThroughPage(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(200, Math.round(window.innerHeight * 0.8));
    const max = document.body.scrollHeight;
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, max);
  });
  await page.waitForTimeout(400);
}

for (const route of ROUTES) {
  test(`${route} — loads, renders brand chrome, no console errors, no broken images`, async ({ page }) => {
    const errors = await collectConsoleErrors(page);

    const response = await page.goto(route, { waitUntil: 'networkidle' });
    expect(response?.ok(), `expected ${route} to respond OK`).toBeTruthy();

    // Header + footer present on every page
    await expect(page.locator('header.site-header')).toBeVisible();
    await expect(page.locator('footer.site-footer')).toBeAttached();

    // Exactly one H1 per page
    const h1Count = await page.locator('h1').count();
    expect(h1Count, `${route} should have exactly one H1`).toBe(1);

    // Scroll through to trigger lazy-loaded images, then verify none are broken
    await scrollThroughPage(page);
    const brokenImages = await page.evaluate(() =>
      Array.from(document.images)
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.src)
    );
    expect(brokenImages, `${route} has broken images`).toEqual([]);

    // No horizontal overflow (responsive check)
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );
    expect(hasHorizontalOverflow, `${route} has horizontal overflow at this viewport`).toBeFalsy();

    const seriousErrors = errors.filter((e) => !/favicon/i.test(e));
    expect(seriousErrors, `${route} produced console errors: ${seriousErrors.join(' | ')}`).toEqual([]);
  });
}

test('homepage hero and key sections render', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero h1')).toContainText('Engineering the future');
  await expect(page.locator('#about')).toBeAttached();
  await expect(page.locator('#capabilities')).toBeAttached();
  await expect(page.locator('#bess')).toBeAttached();
  await expect(page.locator('#facilities')).toBeAttached();
  await expect(page.locator('#projects')).toBeAttached();
  await expect(page.locator('#clients')).toBeAttached();
  await expect(page.locator('#contact')).toBeAttached();
});
